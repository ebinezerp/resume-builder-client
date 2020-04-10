import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-resume',
  templateUrl: './create-resume.component.html',
  styleUrls: ['./create-resume.component.scss']
})
export class CreateResumeComponent implements OnInit {

  currentTab: string;
  constructor() {
    this.currentTab = 'personal';
  }

  ngOnInit() {
  }

  tab(id: string) {
    this.currentTab = id;
  }

}
