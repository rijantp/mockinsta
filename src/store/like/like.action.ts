import { createAction, props } from '@ngrx/store'
import { type UserPost } from '../model/UserPost.model'

export const addLike = createAction(
  '[Counter] AddLike',
  props<{ payLoad: UserPost }>()
)

export const addPost = createAction(
  '[Counter] AddPost',
  props<{ payLoad: UserPost }>()
)

export const addPosts = createAction(
  '[Counter] AddPosts',
  props<{ payLoad: UserPost[] }>()
)
