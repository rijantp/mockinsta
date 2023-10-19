import { Component, inject } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Store } from '@ngrx/store'
import { type Observable } from 'rxjs'
import { addLike } from 'src/store/like/like.action'
import { selectPosts } from 'src/store/like/like.selector'
import { type UserPost } from 'src/store/model/UserPost.model'
import { type AppState } from 'src/store/model/app.state'
import { AddPostFormComponent } from './add-post-form/add-post-form.component'

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.scss']
})
export class ViewPostsComponent {
  public postsList$: Observable<UserPost[]>

  private readonly store: Store<AppState> = inject(Store)
  public constructor () {
    this.postsList$ = this.store.select(selectPosts)
  }

  public onLike (post: UserPost): void {
    this.store.dispatch(addLike({ payLoad: post }))
  }

  private readonly dialog: MatDialog = inject(MatDialog)

  openDialog (): void {
    const dialogRef = this.dialog.open(AddPostFormComponent, { disableClose: true })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`)
    })
  }
}
