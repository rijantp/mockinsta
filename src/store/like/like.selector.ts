import { createSelector } from '@ngrx/store'
import { type UserPost } from '../model/UserPost.model'

export const selectPosts = (state: { userPosts: UserPost[] }): UserPost[] => state.userPosts

export const selectSortPosts = createSelector(
  selectPosts,
  (state: UserPost[]) => state.slice().sort((a: UserPost, b: UserPost) => {
    return new Date(a?.createdAt).getTime() - new Date(b?.createdAt).getTime()
  })
)
