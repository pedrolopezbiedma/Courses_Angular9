import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggingService } from '../shared/services/logging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private loggingService: LoggingService) { }

  ngOnInit() {
  }

  onLoadServers(){
    this.router.navigate(['/servers'], { queryParams: {edit: 1}, fragment: 'Loading' } );
  }

  onLogin(){
    this.loggingService.login();
  }

  onLogout(){
    this.loggingService.logout();
  }
}
