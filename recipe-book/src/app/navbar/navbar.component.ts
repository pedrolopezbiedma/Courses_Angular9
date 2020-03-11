import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls:['./navbar.component.css']
})

export class NavbarComponent {
    title = 'Navbar';
    @Output() itemPressed = new EventEmitter<string>();

    constructor() { }

    onItemPressed(item){
        this.itemPressed.emit(item);
    }
}