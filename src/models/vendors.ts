import { Schema, model } from 'mongoose';
import { AddressSchema } from './schema/address';

const vendorSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'name of vendor needed'],
		},
		email: {
			type: String,
			required: [true, 'email of vendor needed'],
		},

		description: {
			type: String,
			required: [true, 'description of vendor needed'],
		},

		phone: {
			type: Number,
			required: [true, 'phone of vendor needed'],
		},

		website: {
			type: String,
			required: [true, 'website of vendor needed'],
		},

		address: {
			type: [AddressSchema],
			required: [true, 'address of vendor needed'],
		},
	},
	{ timestamps: true }
);

export const Vendors = model('vendors', vendorSchema);
