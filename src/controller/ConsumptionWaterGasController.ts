import { Request, Response } from 'express';
import { ConsumWaterGas } from '../model/ConsumWaterGasModel';

export const createConsumWaterGas = async (req: Request, res: Response) => {
  const { image, customer_code, consum_datetime, consum_type } = req.body;
  try {
    const consumWaterGas = await ConsumWaterGas.create({
      customer_code,
      consum_datetime,
      consum_type
    });
    res.status(201).json(consumWaterGas);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const confirmConsumWaterGas = async (req: Request, res: Response) => {
  const { consum_uuid, confirmed_value } = req.body;
};

export const listConsumWaterGases = async (req: Request, res: Response) => {
  const { customer_code } = req.params;
  const { consum_type } = req.query;
};
