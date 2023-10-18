import { createReducer, on } from '@ngrx/store'
import { type UserPost } from '../model/UserPost.model'
import { addLike } from './like.action'

const initialState: UserPost[] = [
  { likesCount: 0, isLiked: false, _id: '1', title: 'nice evening', subTitle: 'geneva', desc: 'good evening frieds' }
]

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
  ))
