import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  servers = ['Test server 1', 'Test server 2'];
  serverName = '';
  secretShown = false;
  eventsArray = [];

  addNewServerStatus = false;
  serverCreated = false;

  onServerCreation() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onDisplayDetailsClicked() {
    this.secretShown = !this.secretShown;
    this.eventsArray.push(new Date());
  }

}
