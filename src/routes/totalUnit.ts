import { Router } from 'express';
import { totalUnitPost, updatetotal } from '../controllers/totalUnit';

export const total = Router();

total.post('/totalUnit/:vendorId', totalUnitPost);
total.put('/upDatetotalUnit/:vendorId/ext/:quoteId', updatetotal);
