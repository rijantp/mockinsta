import { Component, inject } from '@angular/core'
import { Store } from '@ngrx/store'
import { type Observable } from 'rxjs'
import { addLike } from 'src/store/like/like.action'
import { type AppState } from 'src/store/like/like.state'
import { type UserPost } from 'src/store/model/UserPost.model'

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.scss']
})
export class ViewPostsComponent {
  public postsList$: Observable<UserPost[]>

  private readonly store: Store<AppState> = inject(Store)
  public constructor () {
    this.postsList$ = this.store.select((store) => store.userPosts)
  }

  public onLike (post: UserPost): void {
    this.store.dispatch(addLike({ payLoad: post }))
  }
}
