import mongoose from 'mongoose';

const author = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    name: String,
    userName: String,
    profileImg: String,
  },
  { _id: false },
);

export interface Iauthor {
  userId: mongoose.Schema.Types.ObjectId;
  name: string;
  userName: string;
  profileImg: string;
}

const comment = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true,
    },
    parentId: mongoose.Schema.Types.ObjectId,
    author,
    content: String,
    like: [author],
  },
  { timestamps: true },
);

export interface Icomment {
  _id: mongoose.Schema.Types.ObjectId;
  parentId: mongoose.Schema.Types.ObjectId;
  author: Iauthor;
  content: string;
  like: Array<Iauthor>;
}

const Feed = new mongoose.Schema(
  {
    author,
    content: String,
    location: String,
    like: [author],
    feedImg: [String],
    comments: [comment],
  },
  { timestamps: true },
);

Feed.methods.createFeed = async function createFeed() {
  const result = await mongoose.model('Feed').create(this);
  return result;
};

Feed.methods.exploreFeed = async function exploreFeed() {
  const result = await mongoose.model('Feed').find();
  return result;
};

export interface IFeed extends mongoose.Document {
  author: Iauthor;
  content?: string;
  location?: string;
  like?: Array<Iauthor>;
  feedImg: Array<string>;
  comments?: Array<Icomment>;

  createFeed: () => boolean;
  exploreFeed: () => Array<IFeed>;
}

export default mongoose.model<IFeed>('Feed', Feed);
