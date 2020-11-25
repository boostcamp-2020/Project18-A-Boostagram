import mongoose from 'mongoose';

const author = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  name: String,
  userName: String,
  profileImg: String,
});

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

const FeedSchema = new mongoose.Schema(
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

FeedSchema.methods.createFeed = async function createFeed() {
  try {
    const result = await mongoose.model('Feed').create(this);
    return result;
  } catch (err) {
    return false;
  }
};

type boolFunc = () => boolean;
interface FeedInterface extends mongoose.Document {
  createFeed: boolFunc;
}

export = mongoose.model<FeedInterface>('Feed', FeedSchema);
