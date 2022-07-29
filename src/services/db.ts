import db from "../mockdb/db";
import { Otc } from "../../interfaces";

export default class DB {
  add(payload: Otc.Db): void {
    // check if request alreaday exists
    const payloadIndex = db.findIndex(pay => pay.id === payload.id);
    
    if(payloadIndex === -1) {
      db.push(payload); 
    }
  }
  
  get(payload: Otc.Db): Otc.Db | undefined {
    /* check if the btc requested and usd value matches 
      else return undefined
     */
    const match = db.find(pay => {
      if (pay.usd === payload.usd && pay.btc === payload.usd) {
        return pay;
      }
    });
    
    return match;
  }
  
  delete(payload: Otc.Db): void {
    const payloadIndex = db.findIndex(pay => pay.id === payload.id);
    
    db.splice(payloadIndex, 1);
  }
}