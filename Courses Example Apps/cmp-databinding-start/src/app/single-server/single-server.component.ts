import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-single-server',
    templateUrl: 'single-server.component.html',
    styleUrls: ['single-server.component.css']
})

export class SingleServerComponent implements OnInit {
    @Input() element: { type: string, name: string, content: string };

    constructor() { }

    ngOnInit() { }
}