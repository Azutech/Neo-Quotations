import { Schema, Types, model } from 'mongoose';
import { Vendors } from './vendors';

const dutiesSchema = new Schema({
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
	dutyHSCode: {
		type: String,
		required: [true, 'dutyHSCode of vendor needed'],
	},
	dutyRate: {
		type: String,
		required: [true, 'dutyRate of vendor needed'],
	},
	totalDuty: {
		type: String,
		required: [true, 'totalDuty of vendor needed'],
	},
	localClearing: {
		type: String,
		required: [true, 'localClearing of vendor needed'],
	},
	markingUp: {
		type: String,
		required: [true, 'markingUp of vendor needed'],
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

export const DutiesQuotation = model('CIF', dutiesSchema);
