import * as mongoose from 'mongoose';
import { BlogPost } from 'posts/posts.interface';

export const BlogPostSchema = new mongoose.Schema({
    createdAt: Date,
    userId: Number,
    title: String,
    body: String,
});

BlogPostSchema.pre('save', function(this: BlogPost, next) {
    if (!this.createdAt) {
        this.createdAt = new Date();
    }
    BlogPostSchema.methods.snippet = function(): string {
        return this.body.substring(0, 25);
    };
    next();
});
