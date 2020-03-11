import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emittedEvents = [];
  gameStopped = false;

  onEventReceived(receivedEvent){
    this.emittedEvents.push({
      type: receivedEvent.type,
      id: receivedEvent.id
    });
  }

  onGameStoppedReceived(gameStoppedReceived){
    this.gameStopped = gameStoppedReceived.gameStopped;
  }
}
