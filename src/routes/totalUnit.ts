import {Router} from 'express'
import {totalUnitPost, updatetotal} from '../controllers/totalUnit'


export const total = Router()

total.post('/totalUnit', totalUnitPost)
total.put('/totalUnit', updatetotal)