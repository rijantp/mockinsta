import { Component, inject } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Store } from '@ngrx/store'
import { type Observable } from 'rxjs'
import { addPost } from 'src/store/like/like.action'
import { type UserPost } from 'src/store/model/UserPost.model'
import { type AppState } from 'src/store/model/app.state'
import { type UserProfile } from 'src/store/model/userProfile.model'
import { selectUsers } from 'src/store/user/user.selector'
import { AddUserFormComponent } from './add-user-form/add-user-form.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public usersList$: Observable<UserProfile[]>

  private readonly dialog: MatDialog = inject(MatDialog)

  private readonly store: Store<AppState> = inject(Store)
  public constructor () {
    this.usersList$ = this.store.select(selectUsers)
  }

  openDialog (): void {
    const dialogRef = this.dialog.open(AddUserFormComponent, { disableClose: true })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`)
    })
  }

  public onLike (post: UserPost): void {
    this.store.dispatch(addPost({ payLoad: post }))
  }
}
