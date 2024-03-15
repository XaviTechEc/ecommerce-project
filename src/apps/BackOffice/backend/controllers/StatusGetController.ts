import { Request, Response } from 'express';
import { Controller } from './Controller';

export class StatusGetController implements Controller {
  run(req: Request, res: Response): void {
    res.status(200).json({ status: 'OK', message: 'It works.' });
  }
}
