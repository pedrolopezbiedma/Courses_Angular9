import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logging-alert',
  templateUrl: './logging-alert.component.html',
  styleUrls: ['./logging-alert.component.css']
})
export class LoggingAlertComponent implements OnInit {

  @Input() message: string; 
  constructor() { }

  ngOnInit(): void {
  }

}
