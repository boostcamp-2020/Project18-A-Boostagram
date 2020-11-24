import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
});

export default mongoose.model('User', userSchema);
