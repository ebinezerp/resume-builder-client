import { Component, OnInit } from '@angular/core';
import { PersonalDetails } from 'src/app/model/personal-details';
import { Resume } from 'src/app/model/resume';

@Component({
  selector: 'app-create-resume',
  templateUrl: './create-resume.component.html',
  styleUrls: ['./create-resume.component.scss']
})
export class CreateResumeComponent implements OnInit {

  currentTab: string;
  resume: Resume;

  constructor() {
    this.currentTab = 'personal';
    this.resume = new Resume();
  }

  ngOnInit() {
  }

  tab(id: string) {
    this.currentTab = id;
  }

  onPersonalDetailsSubmit(personalDetails: PersonalDetails) {
    this.resume.personalDetails = personalDetails;
    console.log(this.resume.personalDetails);
    this.currentTab = 'experience';
  }

}
