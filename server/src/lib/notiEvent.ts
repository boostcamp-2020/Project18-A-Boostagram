import http from 'http';
import { getUncheckedNotiCount } from '../services/user.service';

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

      const uncheckedNotiCount = await getUncheckedNotiCount(userName);
      this.io.to(socketId).emit('notiCount', uncheckedNotiCount);

      socket.on('disconnect', (reason: any) => {
        delete this.clientSocketIds[userName];
      });

      socket.on('notiEvent', ({ type, from, to, content }: InotiEvent) => {
        // find target socketID
        const targetSocketID = this.clientSocketIds[to.userName];
        // send notice to socketID
        const message = `${from.userName} ${type} your feed ${content}`;
        this.io.to(targetSocketID).emit('notiEvent', message);
      });
    });
  }
}

export default NotiEvent;
