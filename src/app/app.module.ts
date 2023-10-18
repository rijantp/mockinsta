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

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    ViewPostsComponent,
    HomeComponent
  ],
  imports: [
    MatTabsModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      userPosts: userPostReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
