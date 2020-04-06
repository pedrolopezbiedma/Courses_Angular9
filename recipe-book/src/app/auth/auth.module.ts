import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    imports: [
        FormsModule,
        SharedModule,
        AuthRoutingModule
    ],
    exports: [
    ],
    declarations: [
        AuthComponent
    ],
    providers: [],
})
export class AuthModule { }
