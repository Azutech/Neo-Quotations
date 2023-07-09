import { Router } from "express";
import { registerVendors, getOneVendor, getAllVendors, destroyVendor } from "../controllers/vendors";

export const vendors = Router()

vendors.post('/registerVendors==', registerVendors)
vendors.get('/getvendors===XX/:id', getOneVendor)
vendors.get('/allVendors', getAllVendors)
vendors.delete('/deleteVendors==%/:id', destroyVendor)