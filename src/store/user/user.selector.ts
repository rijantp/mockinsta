import { type UserProfile } from '../model/userProfile.model'

export const selectUsers = (state: { users: UserProfile[] }): UserProfile[] => state.users
