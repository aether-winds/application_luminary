import express, { Request, Response } from 'express';
export const router = express.Router();

router.get('/', (_: Request, response: Response) => {
  response.render('routes/index', {});
});
