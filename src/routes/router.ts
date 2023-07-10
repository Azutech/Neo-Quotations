import { Router } from 'express';
import { vendors } from './vendors';
import { total } from './totalUnit';
import { duties } from './duties';
import { CIF } from './CIF';

export const router = Router();
router.use('/vendors', vendors);
router.use('/quotation', total);
router.use('/quotation', duties);
router.use('/quotation', CIF);
