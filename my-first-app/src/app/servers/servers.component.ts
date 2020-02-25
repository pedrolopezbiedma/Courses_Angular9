import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent {
  servers = ['Test server 1', 'Test server 2'];
  serverName = '';

  addNewServerStatus = false;
  serverCreated = false;

  onServerCreation() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

}
