import mongoose from "mongoose";

const Schema = mongoose.Schema;

interface Token extends Document {
  userId: mongoose.Types.ObjectId;
  token: string;
  createdAt?: Date;
}

const userTokenSchema = new Schema<Token>({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 10, // 30 days
    // expires: 30 * 86400, // 30 days
  },
});

const UserToken = mongoose.model("UserToken", userTokenSchema);

export default UserToken;
