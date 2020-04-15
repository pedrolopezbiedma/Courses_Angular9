import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/store/auth.effects';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AuthInterceptor } from './auth/auth-interceptor.service';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import * as fromApp from './store/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(fromApp.appReducers),
    EffectsModule.forRoot([AuthEffects]),
    AuthModule,
    SharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
