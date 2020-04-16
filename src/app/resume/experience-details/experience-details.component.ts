import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { Experience } from 'src/app/model/experience';

@Component({
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.scss']
})
export class ExperienceDetailsComponent implements OnInit {

  experienceFormGroup: FormGroup;
  experienceArray: Experience[];

  @Output() experienceDetailsSubmit = new  EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.experienceFormGroup = new FormGroup({
      experiences: this.formBuilder.array([
          this.experienceDetailsGroup()
        ])
    });

    if (localStorage.getItem('experienceDetails') != null) {
      console.log(localStorage.getItem('experienceDetails'));
      this.experienceFormGroup.setValue(JSON.parse(localStorage.getItem('experienceDetails')));
    }
   }

  ngOnInit() {
  }

  experienceDetailsGroup(): FormGroup {
    return new FormGroup({
      organisation: new FormControl('', [Validators.required]),
      designation: new FormControl('', [Validators.required] ),
      startMonthAndYear: new FormControl('', [Validators.required]),
      currentOrganisation: new FormControl(''),
      endMonthAndYear: new FormControl(''),
      jobRoleDescription: new FormControl('', [Validators.required])
    });
  }

  addNewExperience(): void {
    const formArray = this.getExperienceArray();
    formArray.push(this.experienceDetailsGroup());
  }

  get experiences() {
    return this.getExperienceArray();
  }

  getExperienceArray(): FormArray {
    return this.experienceFormGroup.get('experiences') as FormArray;
  }

  submit() {
    this.save();
    this.experienceDetailsSubmit.emit(this.experienceFormGroup.value);
  }

  deleteExp(index: number) {
    this.getExperienceArray().removeAt(index);
  }

  save() {
    localStorage.setItem('experienceDetails', JSON.stringify(this.experienceFormGroup.value));
  }

}
