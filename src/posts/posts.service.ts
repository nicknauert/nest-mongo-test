import { Injectable } from '../../node_modules/@nestjs/common';
import { InjectModel } from '../../node_modules/@nestjs/mongoose';
import { Model } from 'mongoose';
import { BlogPost } from './posts.interface';

@Injectable()
export class BlogPostService {
    constructor(
        @InjectModel('BlogPost') private readonly postModel: Model<BlogPost>,
    ) { }

    async findAll(): Promise<BlogPost[]> {
        return await this.postModel.find().exec();
    }

    async createPost(newPost): Promise<BlogPost> {
        const createdPost = new this.postModel(newPost);
        return await createdPost.save();
    }
}
