import { Router } from "express";
import { CIFpost, updateCIF } from "../controllers/CIF";

export const CIF = Router()
 CIF.post('/OEM-extension/:vendorId', CIFpost)
 CIF.put('/OEM-extension/:vendorId', updateCIF)