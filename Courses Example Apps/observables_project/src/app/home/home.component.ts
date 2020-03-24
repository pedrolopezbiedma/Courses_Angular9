import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  observableSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if(count === 4){
          observer.complete();
        }
        if(count > 3){
          observer.error(new Error('Count is greater than 3'));
        }
        count++;
      }, 1000);
    });

    this.observableSubscription = customIntervalObservable.subscribe(data => {
      console.log(data);
    },
    error => {
      console.log(error.message);
    },
    () => {
      console.log('Completed!!!')
    });
  }

  ngOnDestroy(): void {
    this.observableSubscription.unsubscribe();
  }

}
