import { createAction, props } from '@ngrx/store'
import { type UserProfile } from '../model/userProfile.model'

export const addUser = createAction(
  '[User] AddUser',
  props<{ payLoad: UserProfile }>()
)

export const addUsers = createAction(
  '[User] AddUsers',
  props<{ payLoad: UserProfile[] }>()
)
