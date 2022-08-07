import mongoose, { Document, Schema } from 'mongoose';

export interface IVenta {
  total: number;
  client: string;
  products: [];
  desc: string;
}

export interface IVentaModel extends IVenta, Document {}

const VentaSchema: Schema = new Schema(
  {
    total: { type: Number, required: true },
    client: { type: Schema.Types.ObjectId, required: true, ref: 'Client' },
    products: [{ type: Schema.Types.ObjectId, required: true, ref: 'Product' }],
    desc: { type: String, default: 'Venta satisfactoria' }
  },
  {
    timestamps: true
  }
);

export default mongoose.model<IVentaModel>('Venta', VentaSchema);
