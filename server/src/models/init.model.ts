/* eslint-disable no-console */
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import UserModel from './user.model';
import FeedModel from './feed.model';

function connectMongoose(): void {
  dotenv.config();
  const DB_PATH = process.env.DB_PATH || 'err';

  mongoose.connect(
    DB_PATH,
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        return console.error('database connection error', err);
      }
      return console.log('database connected...');
    },
  );
}

function seedData(): void {
  UserModel.collection.drop();
  UserModel.create([
    {
      name: 'JuHy',
      userName: 'JuHyeon-Lee',
      email: 'leon6095@gmail.com',
      password: '1q2w3e4r',
      profileImg:
        'https://ca.slack-edge.com/T019JFET9H7-U019PN65926-7d7d0974a7f9-512',
    },
    {
      name: 'HyoJoon',
      userName: 'chahtk',
      email: 'chahtk@gmail.com',
      password: '1q2w3e4r!',
      profileImg:
        'https://ca.slack-edge.com/T019JFET9H7-U01AE19CWUQ-ccf648c8636a-512',
    },
    {
      name: 'ByeongGook',
      userName: 'rlaqudrnr810',
      email: 'rlaqudrnr810@gmail.com',
      password: '1q2w3e4r!@',
      profileImg:
        'https://ca.slack-edge.com/T019JFET9H7-U019GGE0086-9b1c9fa14e8b-512',
    },
  ]);

  FeedModel.collection.drop();
  FeedModel.create([
    {
      author: {
        userId: '5fbf7104e5213064cc2ffae7',
        name: 'JuHy',
        userName: 'JuHyeon-Lee',
        profileImg:
          'https://ca.slack-edge.com/T019JFET9H7-U019PN65926-7d7d0974a7f9-512',
      },
      content: 'yageunjoa',
      location: '',
      feedImg: [
        'https://avatars0.githubusercontent.com/u/24909656?s=460&u=d41305b6b314f0232605a0f9f293da5f40319199&v=4',
      ],
    },
    {
      author: {
        userId: '5fbf7104e5213064cc2ffae8',
        name: 'HyoJoon',
        userName: 'chahtk',
        profileImg:
          'https://ca.slack-edge.com/T019JFET9H7-U01AE19CWUQ-ccf648c8636a-512',
      },
      content: 'yageunsireo',
      location: '',
      feedImg: [
        'https://ca.slack-edge.com/T019JFET9H7-U01AE19CWUQ-ccf648c8636a-512',
      ],
    },
    {
      author: {
        userId: '5fbf7104e5213064cc2ffae9',
        name: 'ByeongGook',
        userName: 'rlaqudrnr810',
        profileImg:
          'https://ca.slack-edge.com/T019JFET9H7-U019GGE0086-9b1c9fa14e8b-512',
      },
      content: 'yageunsireo',
      location: '',
      feedImg: [
        'https://ca.slack-edge.com/T019JFET9H7-U019GGE0086-9b1c9fa14e8b-512',
      ],
    },
  ]);
}

function connectCollections(): void {
  connectMongoose();
  mongoose.connection.on('disconnected', connectMongoose);
  seedData();
}

export default connectCollections;
