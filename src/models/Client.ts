import mongoose, { Document, Schema } from 'mongoose';

export interface IClient {
  name: string;
  age: number;
  address: {
    barrio: string;
    calle: string;
  };
  cash: number;
  state: boolean;
}

export interface IClientModel extends IClient, Document {}

const ClientSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    address: {
      barrio: { type: String, required: true },
      calle: { type: String, required: true }
    },
    cash: { type: Number, required: true, default: 0 },
    state: { type: Boolean, required: true, default: true }
  },
  {
    versionKey: false
  }
);

export default mongoose.model<IClientModel>('Client', ClientSchema);
