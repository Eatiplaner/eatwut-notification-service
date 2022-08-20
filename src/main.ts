import * as dotenv from 'dotenv';
dotenv.config();

import { Bootstrap } from './core/bootstraps/bootstrap';

async function bootstrap() {
  const bootstrap = new Bootstrap();
  await bootstrap.initApp();
  bootstrap.initMicroservice();
  await bootstrap.start();
}

bootstrap();
