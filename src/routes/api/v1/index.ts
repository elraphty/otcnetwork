import express, {Router} from 'express';
import otc from './otc';

const router: Router = express.Router();

router.use('/otc', otc);

export default router;