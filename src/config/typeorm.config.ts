import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.NODE_ENV === 'production' ? 'db' : '127.0.0.1', // Use 'db' in production, '127.0.0.1' locally
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: true,
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
