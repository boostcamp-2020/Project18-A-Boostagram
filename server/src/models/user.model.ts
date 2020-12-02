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

export interface IFollow {
  userId?: mongoose.Schema.Types.ObjectId;
  name?: string;
  userName?: string;
  profileImg?: string;
}

export interface InotiOptions {
  like: string;
  comment: string;
  commentLike: string;
}

export interface InotiContents {
  userId: mongoose.Schema.Types.ObjectId;
  profileImg: string;
  userName: string;
  notiType: string;
  date: string;
}

export interface IUser extends mongoose.Document {
  name?: string;
  userName?: string;
  email?: string;
  password?: string;
  profileImg?: string;
  follow?: Array<IFollow>;
  follower?: Array<IFollow>;
  notiOptions?: InotiOptions;
  notiContents?: InotiContents;
}

export default mongoose.model<IUser>('User', userSchema);
