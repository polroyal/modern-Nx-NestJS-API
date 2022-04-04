import { Module } from '@nestjs/common';
import { ApiDataAccessArticleModule } from '@nestjsorg/api/data-access-article';
import { ArticleController } from './article.controller';

@Module({
  controllers: [ArticleController],
  imports: [ApiDataAccessArticleModule],
  providers: [],
  exports: [],
})
export class ApiFeatureArticleModule {}
