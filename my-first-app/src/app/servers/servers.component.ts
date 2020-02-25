import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent {
  addNewServerStatus = false;
  creationStatus = '';
  serverName = '';

  getAddNewServerStatus() {
    return this.addNewServerStatus;
  }

  onServerCreation() {
    this.creationStatus = 'The server ' + this.serverName + ' was created';
  }

}
