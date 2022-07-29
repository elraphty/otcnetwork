import peer from '../grapeClient';
import {ValidationError} from "express-validator";
import {Otc, ExpressResponse} from '../../interfaces';
import {grapeWorkerName} from "../config";
import {Response} from "express";

export const sendPayload = (payload: Otc.Db, callback: (res: string | Otc.Db) => void): void => {
  peer.request(grapeWorkerName, payload, {timeout: 100000}, (err: any, result: any) => {
    if (err) throw err;
        
    callback(result);
  })
}

export const randomNumber = (): number => {
  const number = Math.floor(1000 * Math.random() * 9999);

  return number;
}

export const responseSuccess = (res: Response, status: number, msg: string, data: any): Response => {
  const result: ExpressResponse.DataResponse = {
    msg,
    data
  }

  return res.status(status).send(result);
};

export const responseError = (res: Response, status: number, msg: string): void => {
  const result: ExpressResponse.ErrorResponse = {
    msg,
  }

  res.status(status).send(result);
};

export const responseErrorValidation = (res: Response, status: number, errors: ValidationError[]): void => {
  const result: ExpressResponse.ErrorValidationResponse = {
    msg: 'Validation Error',
    errors,
  }

  res.status(status).send(result);
};