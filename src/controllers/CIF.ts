import { Request, Response, NextFunction } from 'express';
import { Vendors } from '../models/vendors';
import { CIFQuotation } from '../models/CIF';
import { AppError } from '../utils/error';

export const CIFpost = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const {
		productName,
		partNumber,
		textDescription,
		freightUnitPrice,
		quantity,
		weight,
		priceUSD,
		freightPercentage,
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
                freightUnitPrice ||
                quantity ||
                weight ||
                priceUSD ||
                freightPercentage ||
                statLift ||
                totalLift
			)
		) {
			return next(new AppError('Input Parameter', 404));
		}

		const existingPartNumber = await CIFQuotation.findOne({
			partNumber: partNumber,
		});

		if (existingPartNumber) {
			return next(new AppError('partnumber does already exist', 409));
		}

		const getThisVendor = await Vendors.findOne({ _id: vendorId });
		if (!getThisVendor) {
			return next(new AppError('vendor not found', 404));
		}
		console.log(3);

		const existingVendor = await CIFQuotation.findOne({});

		if (!existingVendor) {
			return next(new AppError('Quotation does already exist', 409));
		}

		const newfreightPortion =
            (existingVendor.priceUSD !== undefined
            	? existingVendor.priceUSD
            	: 0) *
            (existingVendor.freightPercentage !== undefined
            	? existingVendor.freightPercentage
            	: 0);

		const newCIF = await CIFQuotation.create({
			vendors: getThisVendor._id,
			productName,
			partNumber,
			textDescription,
			freightUnitPrice,
			quantity,
			weight,
			freightPortion: newfreightPortion,
			priceUSD,
			freightPercentage,
			statLift,
			totalLift,
		});

		if (!newCIF) {
			return next(new AppError('Unable to create quotations', 409));
		}

		await newCIF.save();

		return res.status(201).json({
			success: true,
			message: 'Quotaions has been created',
			data: newCIF,
		});
	} catch (err: any) {
		console.error(err);
		return next(new AppError(`Service Error ${err.message}`, 503));
	}
};

export const updateCIF = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const {
		productName,
		partNumber,
		textDescription,
		freightUnitPrice,
		quantity,
		weight,
		priceUSD,
		freightPercentage,
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
                freightUnitPrice ||
                quantity ||
                weight ||
                priceUSD ||
                freightPercentage ||
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
		const getThisQuotation = await CIFQuotation.findOne({ _id: quoteId });
		if (!getThisQuotation) {
			return next(new AppError('Quotation not found', 404));
		}

		const updateQuotation = await CIFQuotation.updateOne(req.body);
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

export const getCIFQuotation = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const allCIFQuotation = await CIFQuotation.find();
		if (!allCIFQuotation) {
			return next(new AppError('all qoutations not found', 404));
		}
		return res.status(202).json({
			success: true,
			message: 'All qoutations has been retrieved',
			data: allCIFQuotation,
		});
	} catch (err: any) {
		console.error(err);
		return next(new AppError(`Service Unavailable ${err.message}`, 503));
	}
};
