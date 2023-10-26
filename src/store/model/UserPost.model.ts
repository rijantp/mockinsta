export interface UserPost {
  _id: string
  title: string
  subTitle: string
  desc: string
  likesCount: number
  comments?: string[]
  isLiked: boolean
  createdAt: string
}
