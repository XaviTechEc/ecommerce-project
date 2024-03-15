import { Router } from 'express';
import { cradle } from '../dependency-injection';
import { StatusGetController } from '../controllers/StatusGetController';

export const register = (router: Router) => {
  router.get('/status', cradle.statusGetController.run.bind(StatusGetController));
};
