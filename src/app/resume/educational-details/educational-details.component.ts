import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-educational-details',
  templateUrl: './educational-details.component.html',
  styleUrls: ['./educational-details.component.scss']
})
export class EducationalDetailsComponent implements OnInit {


  educationDetailsFormGroup: FormGroup;
  educationDetailsSubmit = new EventEmitter();



  constructor(private formBuilder: FormBuilder) {
    if (localStorage.getItem('educationDetails') != null) {
      this.educationDetailsFormGroup.setValue(JSON.parse(localStorage.get('educationDetails')));
    } else {
      this.buildForm();
    }
  }

  ngOnInit() {
  }

  buildForm() {
    this.educationDetailsFormGroup = this.formBuilder.group({
      educationDetails: this.formBuilder.array([
        this.getEducationFormGroup()
      ])
    });
  }


  get educationDetails() {
   return this.getEducationDetailsArray();
  }

  getEducationFormGroup(): FormGroup {
   return this.formBuilder.group({
      institutionName: new FormControl('', [Validators.required]),
      course: new FormControl('', [Validators.required]),
      percentage: new FormControl('', [Validators.required]),
      startYear: new FormControl('', [Validators.required]),
      endYear: new FormControl('', [Validators.required])
    });
  }



  getEducationDetailsArray(): FormArray {
    return this.educationDetailsFormGroup.get('educationDetails') as FormArray;
  }

  addOneMoreEducation() {
    this.getEducationDetailsArray().push(this.getEducationFormGroup());
  }

  save() {
    localStorage.setItem('educationDetails', JSON.stringify(this.educationDetailsFormGroup.value));
  }

  submit() {
    this.save();
    this.educationDetailsSubmit.emit(this.educationDetailsFormGroup.value);
  }

  delete(index: number) {
    this.getEducationDetailsArray().removeAt(index);
  }

}
