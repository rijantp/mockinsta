import { type UserPost } from '../model/UserPost.model'
import { type UserProfile } from '../model/userProfile.model'

export interface AppState {
  loggedInUser: UserProfile
  users: UserProfile[]
  userPosts: UserPost[]
}
