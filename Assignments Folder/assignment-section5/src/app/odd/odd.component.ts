import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  @Input() id = new EventEmitter<{id: number}>(); 

  constructor() { }

  ngOnInit(): void {
  }

}
