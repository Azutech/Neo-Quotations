import { Router } from "express";
import { dutyPost, updateDuty } from "../controllers/duties";

export const duties = Router()
duties.post('/unitprices/:vendorId', dutyPost)
duties.put('/unitprices/:vendorId', updateDuty)
