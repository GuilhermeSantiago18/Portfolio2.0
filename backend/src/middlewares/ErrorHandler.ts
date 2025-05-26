import { ErrorRequestHandler } from 'express';
import { AppError } from '../errors/AppError';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({ error: err.message });
    return
  }
  console.log(err)
  res.status(500).json({ error: 'Internal Server Error' });
  return
};

export default errorHandler;
