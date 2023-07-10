import { Router } from 'express';
import { CIFpost, updateCIF, getCIFQuotation } from '../controllers/CIF';

export const CIF = Router();
CIF.post('/OEM-extension/:vendorId', CIFpost);
CIF.put('/OEM-extension/:vendorId/ext/:quoteId', updateCIF);
CIF.get('/OEM-extension/allQuotation', getCIFQuotation);
