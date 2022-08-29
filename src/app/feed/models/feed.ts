export interface feed {
    description: string;
    creatorId: string;
    creatorPhoto: string;
    creatorName: string;
    date: Date;
    imageUrl?: string;
    videoUrl?: string;
    likes: any;
    comments: any;
    postId: string;
    approved: boolean;
    tagCount: number;
    title: string;
}