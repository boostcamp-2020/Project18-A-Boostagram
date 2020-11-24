import mongoose from 'mongoose';

const notiOptions = new mongoose.Schema({
  like: String,
  comment: String,
  commentLike: String,
});

const notiContents = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  profileImg: String,
  userName: String,
  notiType: String,
  date: String,
});

const followSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  name: String,
  userName: String,
  profileImg: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  userName: String,
  email: String,
  password: String,
  profileImg: String,
  follow: [followSchema],
  follower: [followSchema],
  notiOptions,
  notiContents,
});

export default mongoose.model('User', userSchema);
