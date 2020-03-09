import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: 'cockpit.component.html',
    styleUrls: ['cockpit.component.css']
})

export class CockpitComponent implements OnInit {
    @Output() serverCreated = new EventEmitter<{type: string, name: string, content: string}>();
    @Output() blueprintServerCreated = new EventEmitter<{type: string, name: string, content: string}>();
    newServerName = '';
    newServerContent = '';

    constructor() { }

    ngOnInit() { }

    onAddServer() {
        this.serverCreated.emit({
            type:'server',
            name: this.newServerName,
            content: this.newServerContent
        });
    }

    onAddBlueprint() {
        this.blueprintServerCreated.emit({
            type:'blueprint',
            name: this.newServerName,
            content: this.newServerContent
        });
    }
}