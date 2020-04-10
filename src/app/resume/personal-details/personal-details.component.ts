import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';
import { Resume } from 'src/app/model/resume';
import { PersonalDetails } from 'src/app/model/personal-details';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {

  resume: Resume;

  constructor(private resumeService: ResumeService) {
    this.resume = resumeService.getResume();
    this.resume.personalDetails = new PersonalDetails();
  }

  ngOnInit() {
  }

}
