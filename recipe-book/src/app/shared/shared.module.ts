import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { LoggingAlertComponent } from './logging-alert/logging-alert.component';
import { ToggleDropdownDirective } from './ToggleDropdown/toggle-dropdown.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        ToggleDropdownDirective,
        LoadingSpinnerComponent,
        LoggingAlertComponent
    ],
    declarations: [
        ToggleDropdownDirective,
        LoadingSpinnerComponent,
        LoggingAlertComponent
    ],
    providers: [],
})
export class SharedModule { }
