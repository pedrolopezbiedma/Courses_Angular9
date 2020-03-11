import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() emittedEvent = new EventEmitter<{type: string, id: number}>();
  @Output() gameStopped = new EventEmitter<{gameStopped: boolean}>();
  eventsCounter = 0;
  intervalId;

  constructor() { }

  ngOnInit(): void {
  }

  onGameStarted(){
    this.intervalId = setInterval(() => {
      this.eventsCounter = this.eventsCounter + 1;

      if(this.eventsCounter % 2 === 0){
        this.emittedEvent.emit({type: 'Odd', id: this.eventsCounter});
      }
      else{
        this.emittedEvent.emit({type: 'Even', id: this.eventsCounter});
      }
    }, 1000);

  }

  onGameStopped(){
    this.gameStopped.emit({gameStopped: true});
    clearInterval(this.intervalId);
  }
}
