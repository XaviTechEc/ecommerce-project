import { Router } from 'express';
import { glob } from 'glob';
import path from 'path';

export class AppRouter {
  static get router(): Router {
    const router: Router = Router();
    return router;
  }

  static register(routePath: string, router: Router): void {
    // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
    const { register } = require(routePath) as {
      register: (router: Router) => void;
    };
    register(router);
  }

  static registerRoutes(router: Router): void {
    const routePath = path.join(__dirname, '**', '*.route.ts');
    const routes = glob.sync(routePath, { windowsPathsNoEscape: true });
    routes.map(r => {
      AppRouter.register(r, router);
    });
  }
}
