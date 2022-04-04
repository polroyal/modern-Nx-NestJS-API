import { Module } from '@nestjs/common';
import { ApiFeatureConfigModule } from '@nestjsorg/api/feature-config';
// import { MongooseModule } from '@nestjs/mongoose';
import {
  postgresConfiguration,
  PostgresConfiguration,
} from '@nestjsorg/api/utils-config';
import { ApiFeatureArticleModule } from '@nestjsorg/api/feature-article';
// import { AppController } from './app.controller';

@Module({
  imports: [
    ApiFeatureConfigModule,
    ApiFeatureArticleModule,
    MongooseModule.forRootAsync({
      inject: [postgresConfiguration.KEY],
      useFactory: (config: PostgresConfiguration) => {
        return {
          uri: config.uri,
          dbName: config.dbName,
        };
      },
    }),
  ],
  controllers: [],
})
export class AppModule {}
