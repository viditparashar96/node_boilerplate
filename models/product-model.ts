import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description?: string;
  price: number;
  category: mongoose.Types.ObjectId;
  vendor: mongoose.Types.ObjectId;
  stock: number;
  variants: Array<{
    color: string;
    size: string;
    quantity: number;
    additionalPrice: number;
  }>;
  images: string[];
  ratings: number;
  reviews: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor" },
  stock: { type: Number, required: true },
  variants: [
    {
      color: String,
      size: String,
      quantity: Number,
      additionalPrice: Number,
    },
  ],
  images: [String],
  ratings: { type: Number, default: 0 },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model<IProduct>("Product", ProductSchema);
