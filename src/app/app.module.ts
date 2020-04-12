import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LowerCaseDirective } from './directives/lower-case.directive';
import { ResumeModule } from './resume/resume.module';
import { UserService } from './services/user.service';
import { DirectiveModule } from './directive/directive.module';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ResumeModule,
    HttpClientModule,
    DirectiveModule
  ],
  providers: [
    ResumeModule,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
