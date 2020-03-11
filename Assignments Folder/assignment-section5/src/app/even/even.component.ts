import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  
  @Input() id = new EventEmitter<{id: number}>(); 

  constructor() { }

  ngOnInit(): void {
  }

}
