import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/error';
import { Vendors } from '../models/vendors';

export const registerVendors = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { name, email, description, phone, website, address } = req.body;

	try {
		if (!(name || email || description || phone || address || website)) {
			return next(new AppError('Input parameters required', 404));
		}

		const existingVendor = await Vendors.findOne({ email });
		if (existingVendor) {
			return next(new AppError('Vendors already exist', 409));
		}

		const newVendor = await Vendors.create({
			name,
			email,
			description,
			phone,
			website,
			address,
		});

		if (!newVendor) {
			return next(new AppError('Unable to create driver', 409));
		}

		await newVendor.save();

		return res.status(201).json({
			success: true,
			message: 'Vendors has registered',
			data: newVendor,
		});
	} catch (err: any) {
		console.error(err);
		return next(new AppError(`Service Error ${err.message}`, 503));
	}
};

export const getOneVendor = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { id } = req.params;

	try {
		const getThisVendor = await Vendors.findOne({ _id: id });
		if (!getThisVendor) {
			return next(new AppError('vendor not found', 404));
		}

		return res.status(200).json({
			success: true,
			message: `this vendor ${id} has been retrieved`,
			data: getThisVendor,
		});
	} catch (err: any) {
		console.error(err);
		return next(new AppError(`Service Unavailable ${err.message}`, 503));
	}
};

export const getAllVendors = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const allVendors = await Vendors.find();
		if (!allVendors) {
			return next(new AppError('all vendors not found', 404));
		}
		return res.status(202).json({
			success: true,
			message: 'All vendors has been retrieved',
			data: allVendors,
		});
	} catch (err: any) {
		console.error(err);
		return next(new AppError(`Service Unavailable ${err.message}`, 503));
	}
};

export const destroyVendor = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { id } = req.params;

	try {
		const removeVendor = await Vendors.findOneAndDelete({ _id: id });
		if (!removeVendor) {
			return next(new AppError('Vendor not found', 404));
		}
		return res.status(200).json({
			success: true,
			message: `vendor with this id ${id} has been deleted`,
			data: removeVendor,
		});
	} catch (err: any) {
		console.error(err);
		return next(new AppError(`Service Unavailable ${err.message}`, 503));
	}
};
