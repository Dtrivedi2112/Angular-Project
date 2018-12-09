import { Ingredient } from '../shared/ingredient.model';
import { education } from '../shared/education.model';
import { Skills } from '../shared/Skills.model';
import { Workexperience } from '../shared/Workexperience.model';
import { Volunteer } from '../shared/Volunteer.model';
import { ContactInfo } from '../shared/ContactInfo.model';
import { Interest } from '../shared/Interest.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];
  public education: education[];
  public Workexperience: Workexperience[];
  public Skills: Skills[];
  public Volunteer: Volunteer[];
  public ContactInfo: ContactInfo[];
  public Interest: Interest[];


  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[],
   education: education[], Workexperience: Workexperience[], Skills: Skills[],
   Volunteer: Volunteer[], ContactInfo: ContactInfo[], Interest: Interest[] ) {

    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
    this.education = education;
    this.Workexperience =Workexperience;
    this.Skills = Skills;
    this.Volunteer = Volunteer;
    this.ContactInfo = ContactInfo;
    this.Interest = Interest;
  }
}
