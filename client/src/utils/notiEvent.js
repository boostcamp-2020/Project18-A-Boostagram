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
      console.log(`unchecked noti: ${msg}`);
      if (msg !== 0) {
        this.setNewNoti(true);
        this.setActiveNewNotiNumber(msg);
        setTimeout(() => this.setActiveNewNotiNumber(0), this.displaySeconds);
      }
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
