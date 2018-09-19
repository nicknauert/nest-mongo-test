import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogPostsController } from './posts.controller';
import { BlogPostSchema } from 'db/models/BlogPost.schema';
import { AppService } from 'app.service';
import { BlogPostsService } from './posts.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'BlogPost',
                schema: BlogPostSchema,
            },
        ]),
    ],
    controllers: [
        BlogPostsController,
    ],
    providers: [
        BlogPostsService,
    ],
})
export class PostsModule { }