import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ErrorAlertComponent } from './erroralert/erroralert.component';
import { WarningAlertComponent } from './warningalert/warningalert.compoment';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ErrorAlertComponent,
    WarningAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
