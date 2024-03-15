import * as dotenv from 'dotenv';
import { get } from 'env-var';

dotenv.config();

export const envs = {
  PORT: get('PORT').required().asPortNumber(),
  API_HOST: get('API_HOST').required().asString(),
  POSTGRES_PORT: get('POSTGRES_PORT').required().asPortNumber(),
  POSTGRES_HOST: get('POSTGRES_HOST').required().asString(),
  POSTGRES_USER: get('POSTGRES_USER').required().asString(),
  POSTGRES_PASSWORD: get('POSTGRES_PASSWORD').required().asString(),
  POSTGRES_DB: get('POSTGRES_DB').required().asString(),
};
