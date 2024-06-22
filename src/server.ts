// src/server.ts

import express from 'express';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import { ONE_HUNDRED, SIXTY } from './core/constants';
import morgan from 'morgan';
import router from './routes/cats.routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

app.use(
	rateLimit({
		max: ONE_HUNDRED,
		windowMs: SIXTY,
		message: 'Trop de Requete à partir de cette adresse IP '
	})
);
app.use(morgan('dev'));
app.use('/cats', router);

export default app;
