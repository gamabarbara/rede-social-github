import { timestamp } from "./timestamp";

export interface feed {
    comment: string;
    creatorId: string;
    creatorPhoto: string;
    creatorName: string;
    timestamp: timestamp;
    imageUrl?: string;
    likes: number
    postId: string
}