import { posts } from "src/app/feed/models/posts"

export interface user {
    uid: string
    photoURL: string
    email: string
    posts: posts[]
}