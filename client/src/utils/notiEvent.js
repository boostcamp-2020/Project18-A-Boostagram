import socketIOClient from 'socket.io-client';
import pathURI from '@constants/path';

class NotiEvent {
  constructor(userName) {
    this.socket = undefined;
    this.init(userName);
  }

  async init(userName) {
    this.socket = await socketIOClient(`${pathURI.IP}`, {
      transports: ['websocket'],
      auth: { userName },
    });

    this.socket.on('notiEvent', (msg) => {
      console.log(msg);
    });
  }

  emitEvent(type, from, to, content) {
    this.socket.emit('notiEvent', { type, from, to, content });
  }
}

export default NotiEvent;
