import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from 'src/app/shared/services/can-deactivate.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  allowEdit = true;
  serverName = '';
  serverStatus = '';
  changesSaved = false;

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

  canDeactivate(){
    if(!this.allowEdit){
      return true;
    }
    if(this.serverName !== this.server.name && this.changesSaved === false){
      return confirm('Are you sure you want to leave?');
    }
    else{
      return true;
    }
  }

}
