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

const followSchema = new mongoose.Schema(
  {
    userId: mongoose.Schema.Types.ObjectId,
    name: String,
    userName: String,
    profileImg: String,
  },
  { _id: false },
);

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

export interface IFollow {
  userId: mongoose.Schema.Types.ObjectId;
  name?: string;
  userName: string;
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

userSchema.methods.createFollow = async function createfollow(
  user: IFollow,
  target: IFollow,
) {
  const result =
    (await mongoose.model('User').updateOne(
      { _id: user.userId },
      {
        $push: {
          follow: {
            userId: target.userId,
            name: target.name,
            userName: target.userName,
            profileImg: target.profileImg,
          },
        },
      },
    )) &&
    (await mongoose.model('User').updateOne(
      { _id: target.userId },
      {
        $push: {
          follower: {
            userId: user.userId,
            name: user.name,
            userName: user.userName,
            profileImg: user.profileImg,
          },
        },
      },
    ));
  return result;
};

userSchema.methods.deleteFollow = async function deletefollow(
  user: IFollow,
  target: IFollow,
) {
  console.log(target);
  console.log(user);
  const result = await mongoose.model('User').updateOne(
    { _id: user.userId },
    {
      $pull: {
        follow: {
          userId: target.userId,
        },
      },
    },
  );
  const result1 = await mongoose.model('User').updateOne(
    { _id: target.userId },
    {
      $pull: {
        follower: {
          userId: user.userId,
        },
      },
    },
  );
  return result && result1;
};

export interface IUser extends mongoose.Document {
  name?: string;
  userName: string;
  email?: string;
  password?: string;
  profileImg?: string;
  follow?: Array<IFollow>;
  follower?: Array<IFollow>;
  notiOptions?: InotiOptions;
  notiContents?: InotiContents;
  createUser: () => any;
  findUserName: () => any;
  createFollow: (user: IFollow, target: IFollow) => boolean;
  deleteFollow: (user: IFollow, target: IFollow) => boolean;
}

export default mongoose.model<IUser>('User', userSchema);
