import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  users: string[];

  constructor(private usersService:UsersService){}

  ngOnInit(){
    this.users = this.usersService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.SetInactive(id);
  }
}
