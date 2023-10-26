import { createReducer, on } from '@ngrx/store'
import { type UserPost } from '../model/UserPost.model'
import { addLike, addPosts } from './like.action'

const initialState: UserPost[] = []

export const userPostReducer = createReducer(
  initialState,
  on(addLike, (state = initialState, action) => {
    return [...state.filter((post: UserPost) => {
      return post._id !== action.payLoad._id
    }), {
      ...action.payLoad,
      likesCount: action.payLoad.isLiked
        ? action.payLoad.likesCount - 1
        : action.payLoad.likesCount + 1,
      isLiked: !action.payLoad.isLiked
    }]
  }
  ),
  on(addLike, (state = initialState, action) => {
    state.forEach((post: UserPost) => {
      if (post._id === action.payLoad._id) {
        post.likesCount = action.payLoad.isLiked
          ? action.payLoad.likesCount - 1
          : action.payLoad.likesCount + 1
        post.isLiked = !action.payLoad.isLiked
      }
    })
    return [...state]
  }
  ),
  on(addPosts, (state, action) => {
    return [...state, ...action.payLoad]
  }))
