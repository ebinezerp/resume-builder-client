import { Experience } from './experience';
import { Skill } from './skill';
import { Education } from './education';
import { PersonalDetails } from './personal-details';

export class Resume {
  objective: string;
  experiences: Experience[];
  skillSet: Skill[];
  educationList: Education[];
  personalDetails: PersonalDetails;
}
