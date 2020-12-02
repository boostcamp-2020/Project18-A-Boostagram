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

userSchema.methods.createUser = async function createUser() {
  const result = await mongoose
    .model('User')
    .create({ userName: this.userName, profileImg: this.profileImg });
  return result;
};

userSchema.methods.findUserName = async function findUserName() {
  const result = await mongoose
    .model('User')
    .findOne({ userName: this.userName });
  return result;
};

export interface IUser extends mongoose.Document {
  name?: string;
  userName: string;
  email?: string;
  password?: string;
  profileImg?: string;

  createUser: () => any;
  findUserName: () => any;
}

export default mongoose.model<IUser>('User', userSchema);
