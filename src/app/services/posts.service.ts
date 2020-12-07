import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  getPosts(){
    let posts;
    let headers = {'Authorization':"Bearer "+localStorage.getItem('access_token')}

    this.http.get(environment.api_url + '/api/v1/all_posts/', {headers:headers}).subscribe(data => {
      posts = data
    });
    console.log(posts)
    return posts
  }
  constructor(private http:HttpClient) { }
}
