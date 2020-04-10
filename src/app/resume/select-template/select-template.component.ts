import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-template',
  templateUrl: './select-template.component.html',
  styleUrls: ['./select-template.component.scss']
})
export class SelectTemplateComponent implements OnInit {

  selectedTemplate: number;
  errorMessage: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }


  createResume() {
    if (this.selectedTemplate === undefined) {
      this.errorMessage = 'Select Any Template';
      alert(this.errorMessage);
    } else {
      this.router.navigate(['/create-resume'], {queryParams:  { temp: this.selectedTemplate }});
    }
  }

}
