import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptor } from './auth/auth-interceptor.service';

import { RecipeBookModule } from './recipes-book/recipe-book.module';

import { LoadingSpinnerComponent } from './aux-components/loading-spinner/loading-spinner.component';
import { LoggingAlertComponent } from './aux-components/logging-alert/logging-alert.component';
import { ToggleDropdownDirective } from './directives/ToggleDropdown/toggle-dropdown.directive';
import { ShoppingListModule } from './shopping-list/shopping-list.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthComponent,
    ToggleDropdownDirective,
    LoadingSpinnerComponent,
    LoggingAlertComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipeBookModule,
    ShoppingListModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
