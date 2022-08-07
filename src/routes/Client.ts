import express from 'express';
import controller from '../controllers/Client';

const router = express.Router();

router.post('/create', controller.createClient);
router.get('/get/:clientId', controller.readClient);
router.get('/get', controller.readAll);
router.patch('/update/:clientId', controller.updateClient);
router.delete('/delete/:clientId', controller.deleteClient);

export = router;
