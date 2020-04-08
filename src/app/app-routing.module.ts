import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PersonalDetailsComponent } from './resume/personal-details/personal-details.component';


const routes: Routes = [
  { path: '', component: SignupComponent},
  { path: 'register', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'personalDetails', component: PersonalDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
