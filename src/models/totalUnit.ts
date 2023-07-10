import { Schema, Types, model } from 'mongoose';
import { Vendors } from './vendors';

const totalSchema = new Schema({
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
	WTH: {
		type: String,
		required: [true, 'WTH of vendor needed'],
	},
	costOfCapital: {
		type: String,
		required: [true, 'costOfCapital of vendor needed'],
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

export const TotalQuotation = model('TotalQuotation', totalSchema);
