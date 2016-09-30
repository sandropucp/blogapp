import { CommentModel } from './comment.model';
import { UserModel } from './user.model';

export interface StoryModel {
    _id: number;
    author: UserModel;
    title: string;
    body: string;
    comments: Array<CommentModel>;
    tags: [string];
    createdAt: Date;
}
