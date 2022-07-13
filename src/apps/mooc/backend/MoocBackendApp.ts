import { Server } from './server';
import config from './shared/config';

export class MoocBackendApp {
  server?: Server;

  async start() {
    const port = config.PORT;
    this.server = new Server(port);
    return this.server.listen();
  }

  get httpServer() {
    return this.server?.getHTTPServer();
  }

  async stop() {
    return this.server?.stop();
  }

}
