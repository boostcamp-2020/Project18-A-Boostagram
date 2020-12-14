import dotenv from 'dotenv';
import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import multer from 'multer';
import http from 'http';
import initDB from './models/init.model';
import index from './routes/index';
import initPassport from './passport/init';

const socketIO = require('socket.io');

dotenv.config();

const port = process.env.PORT || 3000;
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/');
  },
  filename: (req, file, callback) => {
    callback(null, `${new Date().getTime()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

initDB();

const app = express();
// todo: origin 설정 로컬+깃만 하면 좋을듯
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(logger('dev'));
app.use(upload.array('file[]'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(initPassport());

app.use('/', index);

// server instance
const server = http.createServer(app);

// socketio 생성후 서버 인스턴스 사용
const io: any = socketIO(server);

interface socketInfoItem {
  [key: string]: string;
}
// socketio 문법
let socketInfo: socketInfoItem = {};

io.on('connection', (socket: any) => {
  const socketId = socket.id;
  const { userName }: { userName: string } = socket.handshake.auth;
  socketInfo = { ...socketInfo, [userName]: socketId };
  console.log(`${userName} connected`);
  socket.on('disconnect', (reason: any) => {
    delete socketInfo[userName];
  });
  socket.on(
    'like',
    ({
      user,
      targetAuthor,
    }: {
      user: { name: string; userName: string; profileImg: string };
      targetAuthor: {
        name: string;
        userName: string;
        profileImg: string;
        userId: string;
      };
    }) => {
      // find target socketID
      const targetSocketID = socketInfo[targetAuthor.userName];

      // send notice to socketID
      const message = `${user.userName} liked your feed`;
      io.to(targetSocketID).emit('noticeFeedLike', message);
    },
  );
});

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000...');
});
