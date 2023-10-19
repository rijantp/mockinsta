import { createReducer, on } from '@ngrx/store'
import { type UserProfile } from '../model/userProfile.model'
import { addUser } from './user.action'

const initialState: UserProfile[] = [
  { _id: '1', userName: 'Ben' }
]

export const userReducer = createReducer(
  initialState,
  on(addUser, (state = initialState, action) => {
    return [...state, action.payLoad]
  }
  ))
