import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderNavComponent } from './header-nav/header-nav.component'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar'
import { ViewPostsComponent } from './view-posts/view-posts.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HomeComponent } from './home/home.component'
import { MatTabsModule } from '@angular/material/tabs'

import { StoreModule } from '@ngrx/store'
import { userPostReducer } from 'src/store/like/like.reducer'
import { userReducer } from 'src/store/user/user.reducer'
import { AddUserFormComponent } from './home/add-user-form/add-user-form.component'
import { MatDialogModule } from '@angular/material/dialog'
import { ReactiveFormsModule } from '@angular/forms'
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddPostFormComponent } from './view-posts/add-post-form/add-post-form.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    ViewPostsComponent,
    HomeComponent,
    AddUserFormComponent,
    AddPostFormComponent
  ],
  imports: [
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTabsModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      userPosts: userPostReducer,
      users: userReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
