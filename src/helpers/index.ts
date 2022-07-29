import peer from '../client';
import { Otc } from '../../interfaces';
import { grapeWorkerName } from "../config";
import DB from '../services/db';
const db = new DB();

export const sendPayload = (payload: Otc.Db) : void => {
  peer.request(grapeWorkerName, payload, { timeout: 100000 }, (err: any, result: any) => {
    if (err) throw err;
    
    console.log(
      'Bitcoin amount is:',
      payload.btc,
      'Dollar amount is:',
      payload.usd
    )
  })
}

export const randomNumber = () : number  => {
  const number = Math.floor(1000 * Math.random() * 9999);
  
  return number;
}