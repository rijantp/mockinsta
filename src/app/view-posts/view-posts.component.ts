import { Component, inject } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Store } from '@ngrx/store'
import { type Observable } from 'rxjs'
import { addLike, addPosts } from 'src/store/like/like.action'
import { selectSortPosts } from 'src/store/like/like.selector'
import { type UserPost } from 'src/store/model/UserPost.model'
import { type AppState } from 'src/store/model/app.state'
import { AddPostFormComponent } from './add-post-form/add-post-form.component'
import { ApiService } from 'src/services/api.service'

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.scss']
})
export class ViewPostsComponent {
  postsList$: Observable<UserPost[]>
  apiService = inject(ApiService)

  private readonly store: Store<AppState> = inject(Store)
  public constructor () {
    this.postsList$ = this.store.select(selectSortPosts)
    this.apiService.getPosts().subscribe((value) => {
      console.log(value)

      this.store.dispatch(addPosts({ payLoad: value }))
    })
  }

  public onLike (post: UserPost): void {
    this.store.dispatch(addLike({ payLoad: post }))
  }

  private readonly dialog: MatDialog = inject(MatDialog)

  openDialog (): void {
    const dialogRef = this.dialog.open(AddPostFormComponent, { disableClose: true })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.apiService.createPost(result).subscribe(value => {
          console.log(value)
        })
      }
    })
  }
}
