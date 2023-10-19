import { type UserPost } from '../model/UserPost.model'

export const selectPosts = (state: { userPosts: UserPost[] }): UserPost[] => state.userPosts
