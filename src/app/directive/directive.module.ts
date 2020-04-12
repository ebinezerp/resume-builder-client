import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LowerCaseDirective } from '../directives/lower-case.directive';



@NgModule({
  declarations: [
    LowerCaseDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LowerCaseDirective
  ]
})
export class DirectiveModule { }
