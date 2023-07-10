import { Schema, Types, model } from 'mongoose';
import { Vendors } from './vendors';

// interface CIFQuotation {
// 	vendors: Types.ObjectId;
// 	productName: string;
// 	partNumber: string;
// 	textDescription: string;
// 	freightUnitPrice: number;
// 	quantity: number;
// 	weight: number;
// 	freightPortion: number;
// 	priceUSD: number;
// 	freightPercentage: number;
// 	statLift: number;
// 	totalLift: number;
//   }

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
		type: Number,
		required: [true, 'priceUSD of vendor needed'],
	},
	freightPercentage: {
		type: Number,
		required: [true, 'freightPercentage of vendor needed'],
	},
	freightPortion: {
		type: Number,
		required: [true, 'freightPortion of vendor needed'],
	},
	freightUnitPrice: {
		type: Number,
		required: [true, 'freightUnitPrice of vendor needed'],
	},
	statLift: {
		type: Number,
		required: [true, 'statLift of vendor needed'],
	},
	totalLift: {
		type: Number,
		required: [true, 'totalLift of vendor needed'],
	},
});

export const CIFQuotation = model('CIFQuotation', cifSchema);
