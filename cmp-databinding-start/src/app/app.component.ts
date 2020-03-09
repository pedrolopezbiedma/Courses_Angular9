import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Test server', content: 'Test server contents'}];

  onServerCreated(serverData: { type: string, name: string, content: string}){
    this.serverElements.push({
      type: serverData.type,
      name: serverData.name,
      content: serverData.content,
    });
  }

  onBlueprintServerCreated(blueprintServerData){
    this.serverElements.push({
      type: blueprintServerData.type,
      name: blueprintServerData.name,
      content: blueprintServerData.content,
    });
  }
}
