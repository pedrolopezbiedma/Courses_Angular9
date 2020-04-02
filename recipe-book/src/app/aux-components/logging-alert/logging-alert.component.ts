import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-logging-alert',
  templateUrl: './logging-alert.component.html',
  styleUrls: ['./logging-alert.component.css']
})
export class LoggingAlertComponent implements OnInit {

  @Input() message: string; 
  @Output() close = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onClose(){
    this.close.emit();
  }
}
