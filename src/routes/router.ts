import { Router } from "express";
import { vendors } from "./vendors";

export const router = Router()
router.use('/', vendors)