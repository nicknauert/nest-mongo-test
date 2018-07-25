import * as mongoose from 'mongoose';

export interface BlogPost extends mongoose.Document {
    title: string;
    userId: number;
    id: number;
    body: string;
    snippet(): string;
    createdAt: Date;
}