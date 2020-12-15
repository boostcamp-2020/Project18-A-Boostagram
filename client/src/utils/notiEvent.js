import socketIOClient from 'socket.io-client';
import pathURI from '@constants/path';

class NotiEvent {
  constructor(userName, setNewNoti, setActiveNewNotiNumber) {
    this.socket = undefined;
    this.setNewNoti = setNewNoti;
    this.setActiveNewNotiNumber = setActiveNewNotiNumber;
    this.displaySeconds = 10000;
    this.init(userName);
  }

  async init(userName) {
    this.socket = await socketIOClient(`${pathURI.IP}`, {
      transports: ['websocket'],
      auth: { userName },
    });

    this.socket.on('notiCount', (msg) => {
      if (msg !== 0) {
        this.setNewNoti(true);
        this.setActiveNewNotiNumber(msg);
        setTimeout(() => this.setActiveNewNotiNumber(0), this.displaySeconds);
      }
    });
  }

  emitEvent(type, from, to, content) {
    this.socket.emit('notiEvent', { type, from, to, content });
  }
}

export default NotiEvent;
