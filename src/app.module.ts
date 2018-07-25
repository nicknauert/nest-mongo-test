import { Module } from '@nestjs/common';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { CompaniesController } from 'companies/companies.controller';
import { BlogPostsController } from 'posts/posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from 'posts/post.module';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/testdb'),
        PostsModule,
    ],
    controllers: [
        AppController,
        CompaniesController,
    ],
    providers: [
        AppService,
    ],
})
export class AppModule { }
