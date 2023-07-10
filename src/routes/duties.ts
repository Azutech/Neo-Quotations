import { Router } from 'express';
import {
	dutyPost,
	updateDuty,
	getallDutiesQuotation,
} from '../controllers/duties';

export const duties = Router();
duties.post('/unitprices/:vendorId', dutyPost);
duties.put('/unitprices/:vendorId/ext/:quoteId', updateDuty);
duties.get('/unitprices/allQuotation', getallDutiesQuotation);
