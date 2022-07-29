import {ValidationError} from "express-validator";
export namespace Otc {
  export interface Db {
    id?: number;
    btc: string;
    usd: string;
  }
}

export namespace ExpressResponse {
  export interface DataResponse {
    msg: string;
    data: any;
  }

  export interface ErrorResponse {
    msg: string;
  }

  export interface ErrorValidationResponse {
    msg: string;
    errors: ValidationError[];
  }
}