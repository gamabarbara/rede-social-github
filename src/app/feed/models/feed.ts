import { timestamp } from "./timestamp";

export interface feed {
    comment: string;
    creatorId: string;
    creatorPhoto: string;
    creatorName: string;
    date: Date;
    imageUrl?: string;
    likes: number
    postId: string
    approved: boolean
}