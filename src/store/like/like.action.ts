import { createAction, props } from '@ngrx/store'
import { type UserPost } from '../model/UserPost.model'

export const addLike = createAction(
  '[Counter] AddLike',
  props<{ payLoad: UserPost }>()
)
