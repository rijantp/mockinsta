import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { type Observable } from 'rxjs'
import { type UserPost } from 'src/store/model/UserPost.model'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http = inject(HttpClient)

  createPost (formValue: { title: string, subTitle: string, desc: string }): Observable<UserPost> {
    return this.http.post<UserPost>('http://localhost:3000/posts', formValue)
  }

  getPosts (): Observable<UserPost[]> {
    return this.http.get<UserPost[]>('http://localhost:3000/posts')
  }
}
