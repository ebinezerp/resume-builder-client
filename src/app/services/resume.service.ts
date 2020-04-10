import { Injectable } from '@angular/core';
import { Resume } from '../model/resume';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private resume: Resume;

  constructor() {
    this.resume = new Resume();
  }

  getResume(): Resume {
    return this.resume;
  }
}
