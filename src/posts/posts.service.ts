import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BlogPost } from './posts.interface';

@Injectable()
export class BlogPostsService {
    constructor(
        @InjectModel('BlogPost') private readonly postModel: Model<BlogPost>,
    ) { }

    async findAll(): Promise<BlogPost[]> {
        return await this.postModel.find().exec();
    }

    async findOne(id): Promise<BlogPost> {
        return await this.postModel.findById( id, (err, res) => {
            return res;
        });
    }

    async createPost(newPost): Promise<BlogPost> {
        const createdPost = new this.postModel(newPost);
        return await createdPost.save();
    }
}
