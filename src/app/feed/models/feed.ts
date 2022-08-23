import { timestamp } from "./timestamp";

export interface feed {
    comment: string;
    creatorId: string;
    creatorPhoto: string;
    creatorName: string;
    timestamp: string;
    imageUrl?: string;
    likes: number
    postId: string
    approved: string
}