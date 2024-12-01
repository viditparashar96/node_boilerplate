import mongoose, { Document, Schema } from "mongoose";

export interface ITransaction extends Document {
  order: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
  status: "success" | "failed" | "pending";
  paymentMethod: string;
  amount: number;
  createdAt: Date;
}

const TransactionSchema: Schema = new Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  status: {
    type: String,
    enum: ["success", "failed", "pending"],
    required: true,
  },
  paymentMethod: String,
  amount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<ITransaction>("Transaction", TransactionSchema);
