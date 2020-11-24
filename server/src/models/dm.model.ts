import mongoose from 'mongoose';

const message = new mongoose.Schema(
  {
    content: String,
    author: mongoose.Schema.Types.ObjectId,
  },
  { timestamps: true },
);

const dm = new mongoose.Schema({
  users: [mongoose.Schema.Types.ObjectId],
  messages: [message],
});

export default mongoose.model('Dm', dm);
