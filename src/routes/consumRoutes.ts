import { Router } from 'express';
import { confirmConsumWaterGas, createConsumWaterGas, listConsumWaterGases } from '../controller/ConsumptionWaterGasController';


const router = Router();

router.post('/', createConsumWaterGas);
router.patch('/confirm', confirmConsumWaterGas);
router.get('/:customer_code/list', listConsumWaterGases);

export default router;