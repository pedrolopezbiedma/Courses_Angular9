import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fechtPosts();
  }

  private fechtPosts(){
    this.http
      .get('https://angular-test-ada86.firebaseio.com/posts.json')
      .pipe(map(responseData => {
        const postsArray = [];
        for (const postKey in responseData) {
          let post = responseData[postKey];
          postsArray.push({...post, id: postKey})
        }
        return postsArray;
      }))
      .subscribe(responseData => {
        this.loadedPosts = responseData;
        console.log(this.loadedPosts);
      })
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http
      .post(
        'https://angular-test-ada86.firebaseio.com/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.fechtPosts();
  }

  onClearPosts() {
    // Send Http request
  }
}
