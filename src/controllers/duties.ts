import { Request, Response, NextFunction } from 'express';
import { Vendors } from '../models/vendors';
import { DutiesQuotation } from '../models/duties';
import { AppError } from '../utils/error';

export const dutyPost = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const {
		productName,
		partNumber,
		textDescription,
		dutyHSCode,
		dutyRate,
		quantity,
		weight,
		totalDuty,
		localClearing,
		markingUp,
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
                dutyHSCode ||
                dutyRate ||
                quantity ||
                weight ||
                totalDuty ||
                localClearing ||
                markingUp ||
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

		const newQuotation = await DutiesQuotation.create({
			productName,
			partNumber,
			textDescription,
			dutyHSCode,
			dutyRate,
			quantity,
			weight,
			totalDuty,
			localClearing,
			markingUp,
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


export const updateDuty = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const {
		productName,
		partNumber,
		textDescription,
		dutyHSCode,
		dutyRate,
		quantity,
		weight,
		totalDuty,
		localClearing,
		markingUp,
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
                dutyHSCode ||
                dutyRate ||
                quantity ||
                weight ||
                totalDuty ||
                localClearing ||
                markingUp ||
                statLift ||
                totalLift
			)
		) {
			return next(new AppError('Input Parameter', 404));
		}

		const getThisVendor = await Vendors.findOne({ vendorId });
		if (!getThisVendor) {
			return next(new AppError('vendor not found', 404));
		}

		const getThisQuotation = await DutiesQuotation.findOne({ _id: quoteId });
		if (!getThisQuotation) {
			return next(new AppError('Quotation not found', 404));
		}

		const updateQuotation = await DutiesQuotation.updateOne(req.body);
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
