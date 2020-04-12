import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';
import { PersonalDetails } from 'src/app/model/personal-details';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {

  personalDetails: PersonalDetails;

  @Output() personalDetailsSubmit = new EventEmitter();


  constructor(private resumeService: ResumeService) {
    this.personalDetails = new PersonalDetails();
  }

  ngOnInit() {
  }

  submit() {
    this.personalDetailsSubmit.emit(this.personalDetails);
  }

}
