import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registrationFormGroup: FormGroup;
  user: User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }


  initForm() {
    this.registrationFormGroup = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@(?:[a-z0-9-]+\.)+[a-z]{2,}$')]),
      password: new FormControl('', [Validators.required,
        Validators.pattern('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$')]),
      confirmPassword: new FormControl('', [Validators.required, this.comparePasswordValidator('password')])
    });
  }

  submit(): void {
    this.user = this.registrationFormGroup.value;
    this.userService.register(this.user).subscribe(
      (user) => {
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log(error);
      }
    );

  }

  get username() {
    return this.registrationFormGroup.get('username');
  }

  get email() {
    return this.registrationFormGroup.get('email');
  }

  get password() {
    return this.registrationFormGroup.get('password');
  }

  get confirmPassword() {
    return this.registrationFormGroup.get('confirmPassword');
  }


  comparePasswordValidator(controlNameToComapre): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean} | null => {
      if (control.value == null || control.value.length === 0) {
        return null;
      }
      console.log(control.value);
      const controlToCompare = control.root.get(controlNameToComapre);
      if (controlToCompare) {
        if (controlToCompare.value !== control.value) {
          return { samepassword : true};
        }
        return null;
      }
      return null;
    };
  }


}
