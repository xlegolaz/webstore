import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Venta from '../models/Venta';

const createVenta = (req: Request, res: Response, next: NextFunction) => {
  const { total, client, products, desc } = req.body;

  const venta = new Venta({
    _id: new mongoose.Types.ObjectId(),
    total,
    client,
    products,
    desc
  });

  return venta
    .save()
    .then((venta) => res.status(201).json({ venta }))
    .catch((error) => res.status(500).json({ error }));
};

const readVenta = (req: Request, res: Response, next: NextFunction) => {
  const ventaId = req.params.ventaId;

  return Venta.findById(ventaId)
    .populate('client', 'name -_id')
    .select('-__v')
    .then((venta) =>
      venta
        ? res.status(200).json({ venta })
        : res.status(404).json({ message: 'Venta not found' })
    )
    .catch((error) => res.status(500).json({ error }));
};

const readAll = (req: Request, res: Response, next: NextFunction) => {
  return Venta.find()
    .populate('client', 'name -_id')
    .populate('products', 'name -_id')
    .select('-__v')
    .then((ventas) => res.status(200).json({ ventas }))
    .catch((error) => res.status(500).json({ error }));
};

const updateVenta = (req: Request, res: Response, next: NextFunction) => {
  const ventaId = req.params.ventaId;

  return Venta.findById(ventaId)
    .then((venta) => {
      if (venta) {
        venta.set(req.body);

        return venta
          .save()
          .then((venta) => res.status(201).json({ venta }))
          .catch((error) => res.status(500).json({ error }));
      } else {
        res.status(404).json({ message: 'Not found' });
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

const deleteVenta = (req: Request, res: Response, next: NextFunction) => {
  const ventaId = req.params.ventaId;

  return Venta.findByIdAndDelete(ventaId)
    .then((venta) =>
      venta
        ? res.status(201).json({ message: 'Deleted' })
        : res.status(404).json({ message: 'Venta not found' })
    )
    .catch((error) => res.status(500).json({ error }));
};

export default {
  createVenta,
  readVenta,
  readAll,
  updateVenta,
  deleteVenta
};
