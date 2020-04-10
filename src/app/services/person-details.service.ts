import { Injectable } from '@angular/core';
import { PersonalDetails } from '../model/personal-details';

@Injectable({
  providedIn: 'root'
})
export class PersonDetailsService {

  private personalDetails: PersonalDetails;

  constructor() { }

  getpersonalDetails(): PersonalDetails {
    return this.personalDetails;
  }

  setPersonalDetails(personalDetails: PersonalDetails): void {
    this.personalDetails = personalDetails;
  }


}
