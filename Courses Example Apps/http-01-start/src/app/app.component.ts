import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  errorSubscription = new Subscription();
  loadedPosts = [];
  isFetching = false;

  constructor(private postsService: PostsService) {}

  private fetchPosts(){
    this.isFetching = true;
    this.errorSubscription = this.postsService.fetchPosts()
      .subscribe(posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
      }, error => {
        console.log(error);
      })
  }

  ngOnInit() {
    this.postsService.error
      .subscribe(error => {
        console.log(error);
      })

    this.fetchPosts();
  }

  ngOnDestroy(){
    this.errorSubscription.unsubscribe();
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.postsService.submitPosts(postData);
  }

  onClearPosts() {
    this.postsService.clearPosts()
      .subscribe(() => {
        this.loadedPosts = []
      })
  }
}
