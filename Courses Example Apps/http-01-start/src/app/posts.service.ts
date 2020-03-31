import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostsService {
    error = new Subject<string>();

    constructor(private http: HttpClient) { }
    
    submitPosts(postData: {title: string, content: string}){
        let myParams = new HttpParams();
        myParams = myParams.append('custom', 'value');
        myParams = myParams.append('custom2', 'value2');

        this.http
        .post(
          'https://angular-test-ada86.firebaseio.com/posts.json',
          postData,
          {
              headers: new HttpHeaders({
                  'custom-header': 'true'
              }),
              params: myParams,
              observe: 'response',
              responseType: 'json'
          }
        )
        .subscribe(responseData => {
          console.log(responseData);
        }, error => {
            this.error.next(error);
        });
    }

    fetchPosts(){
        return this.http
            .get('https://angular-test-ada86.firebaseio.com/posts.json')
            .pipe(map(responseData => {
            const postsArray = [];
            for (const postKey in responseData) {
                let post = responseData[postKey];
                postsArray.push({...post, id: postKey})
            }
            return postsArray;
            }))
    }

    clearPosts(){
        return this.http
            .delete('https://angular-test-ada86.firebaseio.com/posts.json')
    }
}