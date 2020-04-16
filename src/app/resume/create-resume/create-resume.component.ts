import { Component, OnInit } from '@angular/core';
import { PersonalDetails } from 'src/app/model/personal-details';
import { Resume } from 'src/app/model/resume';
import { Experience } from 'src/app/model/experience';
import { Education } from 'src/app/model/education';

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

  onExperienceDetailsSubmit(experiences: Experience[]) {
    this.resume.experiences = experiences;
    console.log(this.resume.experiences);
    this.currentTab = 'education';
  }

  onEducationDetailsSubmit(educationDetails: Education[]) {
    this.resume.educationList = educationDetails;
    console.log(this.resume.educationList);
    this.currentTab = 'skills';
  }

}
