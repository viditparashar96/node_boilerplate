import mongoose, { Document, Schema } from "mongoose";

export interface IVendor extends Document {
  name: string;
  email: string;
  password: string;
  storeName: string;
  storeDescription?: string;
  address?: string;
  products: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const VendorSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  storeName: { type: String, required: true },
  storeDescription: String,
  address: String,
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model<IVendor>("Vendor", VendorSchema);
