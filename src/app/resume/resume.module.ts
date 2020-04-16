import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectTemplateComponent } from './select-template/select-template.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateResumeComponent } from './create-resume/create-resume.component';
import { EducationalDetailsComponent } from './educational-details/educational-details.component';
import { ExperienceDetailsComponent } from './experience-details/experience-details.component';
import { SkillsComponent } from './skills/skills.component';
import { DirectiveModule } from '../directive/directive.module';



@NgModule({
  declarations: [
    SelectTemplateComponent, PersonalDetailsComponent,
    CreateResumeComponent, EducationalDetailsComponent,
    ExperienceDetailsComponent, SkillsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    DirectiveModule,
    ReactiveFormsModule
  ]
})
export class ResumeModule { }
