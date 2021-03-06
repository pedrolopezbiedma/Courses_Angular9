import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './shared/services/auth-guard-service';
import { CanDeactivateGuard } from './shared/services/can-deactivate.service';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }
    ]},
    { path: 'servers', 
      //canActivate:[AuthGuard], 
      canActivateChild: [AuthGuard],
      component: ServersComponent, 
      children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent, canDeactivate:[CanDeactivateGuard] }
    ] },
    { path: 'not-found', component: PageNotFoundComponent},
    { path: '**', redirectTo: 'not-found'}
  ];
  
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule { }
