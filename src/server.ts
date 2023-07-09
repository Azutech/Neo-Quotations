import express, { Application, Request, Response } from 'express';
import log from './logger/customlogger';
import { router } from './routes/router';
import dotenv from 'dotenv';

dotenv.config();

export const app: Application = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
	res.status(200).json({
		message: 'Welcome to Neo-Quotations \n get the best deals',
	});
	log.info('BOOM 🔥🔥');
});

app.get('*', (req: Request, res: Response) => {
	res.status(404).json({ message: 'This route does not exist' });
});
