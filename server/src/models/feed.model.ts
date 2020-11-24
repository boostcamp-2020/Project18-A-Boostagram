import mongoose from 'mongoose';

const author = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
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

const feedSchema = new mongoose.Schema(
  {
    author,
    content: String,
    location: String,
    like: [author],
    imgUrl: [String],
    comments: [comment],
  },
  { timestamps: true },
);

export default mongoose.model('Feed', feedSchema);
