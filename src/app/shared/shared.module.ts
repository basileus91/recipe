import {NgModule} from '@angular/core';
import {DropdownDirective} from './dropdown.directive';
import {LoadingSpinnerComponent} from './loading-spinner/loading-spinner.component';
import {AlertComponent} from './alert/alert.component';
import {PlaceholderDirective} from './placeholder/placeholder.directive';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    DropdownDirective,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownDirective,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective
  ]
})
export class SharedModule {

}
