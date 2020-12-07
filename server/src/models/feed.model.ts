import mongoose from 'mongoose';

mongoose.set('useFindAndModify', false);

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
  _id?: mongoose.Schema.Types.ObjectId;
  parentId: mongoose.Schema.Types.ObjectId;
  author: Iauthor;
  content: string;
  like?: Array<Iauthor>;
  feedId?: mongoose.Schema.Types.ObjectId;
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
  const result = await mongoose.model('Feed').find().sort('-createdAt');
  return result;
};

Feed.methods.followingFeed = async function followingFeed(
  params: Array<string>,
) {
  const result = await mongoose
    .model('Feed')
    .find({ 'author.userId': { $in: params } })
    .sort('-createdAt');
  return result;
};

Feed.methods.createComment = async function createComment(params: Icomment) {
  const result = await mongoose.model('Feed').updateOne(
    { _id: params.feedId },
    {
      $push: {
        comments: {
          parentId: params.parentId,
          author: params.author,
          content: params.content,
        },
      },
    },
  );
  return result;
};
Feed.methods.addLike = async function addLike(
  user: Iauthor,
  feedId: mongoose.Schema.Types.ObjectId,
) {
  console.log('add');
  const result = await mongoose.model('Feed').updateOne(
    { _id: feedId },
    {
      $push: {
        like: {
          userId: user.userId,
          name: user.name,
          userName: user.userName,
          profileImg: user.profileImg,
        },
      },
    },
  );
  return result;
};
Feed.methods.deleteLike = async function deleteLike(
  user: Iauthor,
  feedId: mongoose.Schema.Types.ObjectId,
) {
  console.log('delete');
  const result = await mongoose.model('Feed').updateOne(
    { _id: feedId },
    {
      $pull: {
        like: {
          userId: user.userId,
        },
      },
    },
  );
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
  followingFeed: (params: Array<string>) => Array<IFeed>;
  createComment: (params: Icomment) => boolean;
  addLike: (user: Iauthor, feedId: string) => boolean;
  deleteLike: (user: Iauthor, feedId: string) => boolean;
}

export default mongoose.model<IFeed>('Feed', Feed);
