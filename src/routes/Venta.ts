import express from 'express';
import controller from '../controllers/Venta';

const router = express.Router();

router.post('/create', controller.createVenta);
router.get('/get/:ventaId', controller.readVenta);
router.get('/get', controller.readAll);
router.patch('/update/:ventaId', controller.updateVenta);
router.delete('/delete/:ventaId', controller.deleteVenta);

export = router;
