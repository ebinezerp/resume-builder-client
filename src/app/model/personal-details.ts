export class PersonalDetails {
  fullname: string;
  dateOfBirth: Date;
  gender: string;
  maritalStatus: MaritalStatus;
  email: string;
  mobile: string;
  alternativeMobile: string;
  currentLocation: string;

}


export enum MaritalStatus {
  SINGLE, MARRIED, WIDOWER, WIDOW, 'NOT INTERESTED TO SHARE'
}
