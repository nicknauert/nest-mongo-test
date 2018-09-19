import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { BlogPostsService } from './posts.service';

@Controller('posts')
export class BlogPostsController {
    private baseUrl;
    constructor(
        private blogPostService: BlogPostsService,
    ) { }

    @Get()
    getBlogPosts() {
        return this.blogPostService.findAll();
    }

    @Get(':id')
    getSinglePost(@Param() params) {
        return this.blogPostService.findOne(params.id);
    }

    @Post()
    createBlogPost(@Body() newPost) {
        return this.blogPostService.createPost(newPost);
    }

}