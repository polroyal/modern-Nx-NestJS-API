import { Inject } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';

export const postgresConfiguration = registerAs('postgres', () => ({
  uri: process.env.POSTGRESQL_URI || 'postgresql://localhost:5432',
  dbName: process.env.POSTGRESQL_DB_NAME || 'modern-api-rest',
}));

export type PostgresConfiguration = ConfigType<typeof postgresConfiguration>;
export const InjectMongoConfig = () => Inject(postgresConfiguration);
