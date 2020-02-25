import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent {
  addNewServerStatus = false;
  creationStatus = '';
  serverName = '';
  serverOwner = '';

  getAddNewServerStatus() {
    return this.addNewServerStatus;
  }
  onServerCreation() {
    this.creationStatus = 'The server ' + this.serverName + ' was created';
  }

  getClearButtonStatus() {
    if (this.serverOwner === '') {
      return true;
    } else {
      return false;
    }
  }
  onResetServerOwner() {
    this.serverOwner = '';
  }


}
