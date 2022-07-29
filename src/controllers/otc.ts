import {Request, Response, NextFunction} from 'express';
import {validationResult} from 'express-validator';
import {Otc} from '../../interfaces';
import {randomNumber, responseErrorValidation, responseSuccess} from '../helpers';
import {sendPayload} from '../helpers';

export const addOtc = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return responseErrorValidation(res, 400, errors.array());
    }

    const btc = req.body.btc;
    const usd = req.body.usd;
    const id = randomNumber();

    const payload: Otc.Db = {
      id,
      usd,
      btc
    };
    
    sendPayload(payload, (data: string | Otc.Db) => {
      if(typeof data !== 'string') {
        return responseSuccess(res, 200, 'Otc match found', data);
      } else {
        return responseSuccess(res, 200, 'Added otc', payload);
      }
    });

  } catch (err) {
    next(err);
  }
}