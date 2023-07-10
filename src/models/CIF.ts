import { Schema, Types, model } from 'mongoose';
import { Vendors } from './vendors';

const cifSchema = new Schema({
	vendors: {
		type: Schema.Types.ObjectId,
		required: false,
		ref: Vendors,
	},

	productName: {
		type: String,
		required: [true, 'Product Name of vendor needed'],
	},
	partNumber: {
		type: Number,
		required: [true, 'Part Number of vendor needed'],
	},
	textDescription: {
		type: String,
		required: [true, 'Description Name of vendor needed'],
	},
	quantity: {
		type: String,
		required: [true, 'Quantity of vendor needed'],
	},
	weight: {
		type: String,
		required: [true, 'Weight of vendor needed'],
	},
	priceUSD: {
		type: String,
		required: [true, 'priceUSD of vendor needed'],
	},
	freightPercentage: {
		type: String,
		required: [true, 'freightPercentage of vendor needed'],
	},
	freightPortion: {
		type: String,
		required: [true, 'freightPortion of vendor needed'],
	},
	freightUnitPrice: {
		type: String,
		required: [true, 'freightUnitPrice of vendor needed'],
	},
	freightUnitPriceCIF: {
		type: String,
		required: [true, 'freightUnitPriceCIF of vendor needed'],
	},
	statLift: {
		type: String,
		required: [true, 'statLift of vendor needed'],
	},
	totalLift: {
		type: String,
		required: [true, 'totalLift of vendor needed'],
	},
});

export const CIFQuotation = model('CIFQuotation', cifSchema);
