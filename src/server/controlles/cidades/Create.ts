import { Request, Response } from 'express';
import * as yup from 'yup';

import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';
import { ICidade } from '../../database/models';
 
interface IBodyProps extends Omit<ICidade, 'id'> {}

export const createValidator = validation(getSchema => ({
  body: getSchema<IBodyProps>(yup.object({
    nome: yup.string().required().min(3),
  }))
}));

export const create = async (req: Request<{}, {}, IBodyProps>, res: Response) => {
  console.log(req.body);
  
  return res.status(StatusCodes.CREATED).json(1);
};