import { Request, Response, NextFunction } from 'express';
import { Vendors } from '../models/vendors';
import { TotalQuotation } from '../models/totalUnit';
import { AppError } from '../utils/error';

export const totalUnitPost = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const {
		productName,
		partNumber,
		textDescription,
		quantity,
		weight,
		costOfCapital,
		WTH,
		statLift,
		totalLift,
	} = req.body;

	const { vendorId } = req.params;

	try {
		if (
			!(
				productName ||
                partNumber ||
                textDescription ||
                quantity ||
                weight ||
                costOfCapital ||
                WTH ||
                statLift ||
                totalLift
			)
		) {
			return next(new AppError('Input Parameter', 404));
		}
		const getThisVendor = await Vendors.findOne({ _id: vendorId });
		if (!getThisVendor) {
			return next(new AppError('vendor not found', 404));
		}

		const newQuotation = await TotalQuotation.create({
			vendors: getThisVendor._id,
			productName,
			partNumber,
			textDescription,
			quantity,
			weight,
			costOfCapital,
			WTH,
			statLift,
			totalLift,
		});

		if (!newQuotation) {
			return next(new AppError('Unable to create quotations', 409));
		}

		await newQuotation.save();

		return res.status(201).json({
			success: true,
			message: 'Quotaions has been created',
			data: newQuotation,
		});
	} catch (err: any) {
		console.error(err);
		return next(new AppError(`Service Error ${err.message}`, 503));
	}
};

export const updatetotal = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const {
		productName,
		partNumber,
		textDescription,
		quantity,
		weight,
		costOfCapital,
		WTH,
		statLift,
		totalLift,
	} = req.body;

	const { vendorId, quoteId } = req.params;

	try {
		if (
			!(
				productName ||
                partNumber ||
                textDescription ||
                quantity ||
                weight ||
                costOfCapital ||
                WTH ||
                statLift ||
                totalLift
			)
		) {
			return next(new AppError('Input Parameter', 404));
		}

		const getThisVendor = await Vendors.findOne({ _id: vendorId });
		if (!getThisVendor) {
			return next(new AppError('vendor not found', 404));
		}

		const getThisQuotation = await TotalQuotation.findOne({ _id: quoteId });
		if (!getThisQuotation) {
			return next(new AppError('Quotation not found', 404));
		}

		const updateQuotation = await TotalQuotation.updateOne(req.body);
		if (!updateQuotation) {
			return next(new AppError('Unable to Update Quotation', 404));
		}

		return res.status(200).json({
			success: true,
			message: 'Quotaions has been updated',
			data: updateQuotation,
		});
	} catch (err: any) {
		console.error(err);
		return next(new AppError(`Service Error ${err.message}`, 503));
	}
};
