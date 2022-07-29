import {body} from 'express-validator';

const myWhitelist: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.';

export const addOtcValidator = [
  body('btc')
    .not().isEmpty()
    .isString()
    .ltrim()
    .rtrim()
    .whitelist(myWhitelist)
    .escape()
    .isLength({min: 1})
    .withMessage('provide btc value'),
  body('usd')
    .not().isEmpty()
    .isString()
    .ltrim()
    .rtrim()
    .whitelist(myWhitelist)
    .escape()
    .isLength({min: 1})
    .withMessage('Procide usd value'),
]