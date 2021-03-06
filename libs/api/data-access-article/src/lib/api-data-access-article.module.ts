import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleService } from './article.service';
import { Article, ArticleSchema } from './article.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }]),
  ],
  providers: [ArticleService],
  exports: [ArticleService],
})
export class ApiDataAccessArticleModule {}
