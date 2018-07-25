import { Controller, Get, Post, Body, Put } from '@nestjs/common';
import { BlogPostService } from './posts.service';

@Controller('posts')
export class BlogPostsController {
    private baseUrl;
    constructor(
        private blogPostService: BlogPostService,
    ) { }

    @Get()
    getBlogPosts() {
        return this.blogPostService.findAll();
    }

    @Post()
    createBlogPost(@Body() newPost) {
        return this.blogPostService.createPost(newPost);
    }

}