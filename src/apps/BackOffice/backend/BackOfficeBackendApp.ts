import { envs } from './plugins/envs';
import { AppRouter } from './routes/router';
import { Server } from './server';

export class BackOfficeBackendApp {
  server?: Server;

  async start() {
    this.server = new Server({
      environment: process.env.NODE_ENV!,
      apiHost: envs.API_HOST,
      port: envs.PORT || 3000,
      router: AppRouter.router,
    });

    await this.server.listen();
  }

  get httpServer() {
    return this.server?.getHttpServer();
  }

  async stop() {
    return this.server?.stop();
  }
}
