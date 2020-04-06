import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { RecipeBookModule } from './recipes-book/recipe-book.module';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptor } from './auth/auth-interceptor.service';
import { LoadingSpinnerComponent } from './aux-components/loading-spinner/loading-spinner.component';
import { LoggingAlertComponent } from './aux-components/logging-alert/logging-alert.component';
import { ToggleDropdownDirective } from './directives/ToggleDropdown/toggle-dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    AuthComponent,
    ToggleDropdownDirective,
    LoadingSpinnerComponent,
    LoggingAlertComponent
  ],
  imports: [
    RecipeBookModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
