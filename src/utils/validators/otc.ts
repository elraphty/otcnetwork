import {body} from 'express-validator';

const myWhitelist: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890$,\/().';

export const addOtcValidator = [
  body('order')
    .not().isEmpty()
    .isString()
    .ltrim()
    .rtrim()
    .whitelist(myWhitelist)
    .escape()
    .isLength({min: 1})
    .withMessage('Can\'t send an empty order'),
]