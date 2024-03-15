import compression from 'compression';
import errorHandler from 'errorhandler';
import express, { Request, Response, Router } from 'express';
import helmet from 'helmet';
import * as http from 'http';
import { AppRouter } from './routes/router';
import { HttpStatus } from './plugins/http-status';

interface Props {
  port: number;
  router: Router;
  environment: string;
  apiHost: string;
}

export class Server {
  private readonly app: express.Express;
  private readonly port: number;
  private readonly router: Router;
  private readonly environment: string;
  private readonly apiHost: string;

  private httpServer?: http.Server;
  private apiVersion = 1;
  private prefix = `/api/v${this.apiVersion}`;

  constructor({ port, router, environment, apiHost }: Props) {
    this.app = express();
    this.port = port;
    this.router = router;
    this.environment = environment;
    this.apiHost = apiHost;

    this.setMiddlewares();
    this.setRouter(router);
  }

  public async listen() {
    return new Promise<void>(resolve => {
      this.httpServer = this.app.listen(this.port, () => {
        console.log(`Mock Backend App is running at ${this.apiHost}:${this.port}${this.prefix} in ${this.environment}`);
        console.log('  Press CTRL-C to stop\n');
      });
      resolve();
    });
  }

  public getHttpServer(): Server['httpServer'] {
    return this.httpServer;
  }

  public async stop(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close(error => {
          if (error) {
            return reject(error);
          }

          return resolve();
        });
      }

      return resolve();
    });
  }

  private setMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    // Helmet
    this.app.use(helmet.xssFilter());
    this.app.use(helmet.noSniff());
    this.app.use(helmet.hidePoweredBy());
    this.app.use(helmet.frameguard({ action: 'deny' }));

    // Compression
    this.app.use(compression());

    // Error Handler
    this.app.use(errorHandler());
  }

  private setRouter(router: Router) {
    this.app.use(this.prefix, router);
    AppRouter.registerRoutes(this.router);
    this.router.use((err: Error, _req: Request, res: Response, next: Function): void => {
      if (!err) return;
      console.error(err);
      res.status(HttpStatus.codes.INTERNAL_SERVER_ERROR).send(err.message);
    });
  }
}
