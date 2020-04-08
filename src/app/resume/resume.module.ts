import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectTemplateComponent } from './select-template/select-template.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [SelectTemplateComponent, PersonalDetailsComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ResumeModule { }
