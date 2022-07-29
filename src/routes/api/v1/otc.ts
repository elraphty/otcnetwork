import express, {Router} from 'express';
import {addOtcValidator} from '../../../utils/validators/otc';
import {addOtc} from '../../../controllers/otc';

const router: Router = express.Router();

router.post('/', addOtcValidator, addOtc);

export default router;