/**
 * API Routes
 */

import { Router } from 'express';
import HTTPStatus from 'http-status';

import UserRoutes from './users';


//import APIError from '../services/error';

// Middlewares
//import logErrorService from '../services/log';

const routes = new Router();

const isDev = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV === 'test';

routes.use('/users', UserRoutes);
// routes.all('*', (req, res, next) =>
//   next(new APIError('Not Found!', HTTPStatus.NOT_FOUND, true)),
// );

routes.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})
routes.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        message: error.message,
    });
})

//routes.use(logErrorService);

export default routes;
