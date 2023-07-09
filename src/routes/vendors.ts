import { Router } from "express";
import { registerVendors, getOneVendor } from "../controllers/vendors";

export const vendors = Router()

vendors.post('/registerVendors==', registerVendors)
vendors.get('/getvendors===XX/:id', getOneVendor)