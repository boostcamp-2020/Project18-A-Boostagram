import http from 'http';
import { getUncheckedNotiCount, upsertNoti } from '../services/user.service';

const socketIO = require('socket.io');

interface IclientSocketIds {
  [key: string]: string;
}

interface InotiEvent {
  type: string;
  from: { name: string; userName: string; profileImg: string };
  to: {
    name: string;
    userName: string;
    profileImg: string;
    userId: string;
  };
  content: string;
}

class NotiEvent {
  server: any;

  io: any;

  clientSocketIds: IclientSocketIds = {};

  constructor(app: any) {
    this.server = http.createServer(app);
    this.io = socketIO(this.server);

    this.io.on('connection', async (socket: any) => {
      const socketId = socket.id;
      const { userName }: { userName: string } = socket.handshake.auth;
      this.clientSocketIds = { ...this.clientSocketIds, [userName]: socketId };

      console.log(`${userName} connected`);

      let uncheckedNotiCount = await getUncheckedNotiCount(userName);
      this.io.to(socketId).emit('notiCount', uncheckedNotiCount);

      socket.on('disconnect', (reason: any) => {
        delete this.clientSocketIds[userName];
      });

      socket.on('notiEvent', async (data: InotiEvent) => {
        const result = await upsertNoti(data);
        if (result) {
          const targetSocketID = this.clientSocketIds[data.to.userName];
          uncheckedNotiCount = await getUncheckedNotiCount(data.to.userName);
          this.io.to(targetSocketID).emit('notiCount', uncheckedNotiCount);
        }
      });
    });
  }
}

export default NotiEvent;
