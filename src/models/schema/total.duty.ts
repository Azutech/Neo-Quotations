import { Schema } from 'mongoose';

export const totalDutySchema = new Schema(
	{
		surcharge: {
			type: String,
		},
		TISS: {
			type: String,
		},
		TLS: {
			type: String,
		},
		VAT: {
			type: String,
		},
	},
	{ _id: false }
);
