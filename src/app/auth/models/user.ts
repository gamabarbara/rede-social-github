import { posts } from "src/app/feed/models/posts"

export interface user {
    uid: string
    photoURL: string
    username: string
    name: string
    bio: string
    email: string
    posts: posts[]
}