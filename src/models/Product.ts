import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct {
  name: string;
  proveedor: string;
  precio: number;
  tipo: string;
}

export interface IProductModel extends IProduct, Document {}

const ProductSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    proveedor: { type: String, required: true },
    precio: { type: Number, required: true },
    tipo: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

export default mongoose.model<IProductModel>('Product', ProductSchema);
