import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  checked = false;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']);
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  onAddSkills() {
    (<FormArray>this.recipeForm.get('Skills')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

   onAddEducation() {
    (<FormArray>this.recipeForm.get('education')).push(
      new FormGroup({
        'institute': new FormControl(null, Validators.required),
        'qualification': new FormControl(null, Validators.required),
        'date_started': new FormControl(null, Validators.required),
        'date_ended': new FormControl(null, Validators.required),
        'description': new FormControl(null, Validators.required)
        
      })
    );
  }

   onAddWE() {
    (<FormArray>this.recipeForm.get('Workexperience')).push(
      new FormGroup({
        'Position': new FormControl(null, Validators.required),
        'Companyname': new FormControl(null, Validators.required),
         'Location': new FormControl(null, Validators.required),
        'date_started': new FormControl(null, Validators.required),
        'date_ended': new FormControl(null, Validators.required),
        'description': new FormControl(null, Validators.required)
        
      })
    );
  }


   onAddVE() {
    (<FormArray>this.recipeForm.get('Volunteer')).push(
      new FormGroup({
        'Position': new FormControl(null, Validators.required),
        'Companyname': new FormControl(null, Validators.required),
         'Location': new FormControl(null, Validators.required),
        'date_started': new FormControl(null, Validators.required),
        'date_ended': new FormControl(null, Validators.required),
        'description': new FormControl(null, Validators.required)
        
      })
    );
  }


   onAddContact() {
    (<FormArray>this.recipeForm.get('ContactInfo')).push(
      new FormGroup({
        'LinkedIn': new FormControl(null, Validators.required),
        'Phone': new FormControl(null, Validators.required),
         'Email': new FormControl(null, Validators.required),
         'Location': new FormControl(null, Validators.required)
        
        
      })
    );
  }

  onAddINT() {
    (<FormArray>this.recipeForm.get('Interest')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        
        
        
      })
    );
  }







  onDeleteSkills(index: number) {
    (<FormArray>this.recipeForm.get('Skills')).removeAt(index);
  }

   onDeleteEducation(index: number) {
    (<FormArray>this.recipeForm.get('education')).removeAt(index);
  }

    onDeleteWE(index: number) {
    (<FormArray>this.recipeForm.get('Workexperience')).removeAt(index);
  }

   onDeleteVE(index: number) {
    (<FormArray>this.recipeForm.get('Volunteer')).removeAt(index);
  }


 onDeleteContact(index: number) {
    (<FormArray>this.recipeForm.get('ContactInfo')).removeAt(index);
  }

   onDeleteINT(index: number) {
    (<FormArray>this.recipeForm.get('Interest')).removeAt(index);
  }


  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeSkills = new FormArray([]);
    let recipeEducation = new FormArray([]);
    let recipeWorkexperience = new FormArray([]);
    let recipeVolunteer = new FormArray([]);
    let recipeContactInfo = new FormArray([]);
    let recipeInterest = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;

      if (recipe['Skills']) {
        for (let Skills of recipe.Skills) {
          recipeSkills.push(
            new FormGroup({
              'name': new FormControl(Skills.name, Validators.required),
              'amount': new FormControl(Skills.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }

       if (recipe['education']) {
        for (let education of recipe.education) {
          recipeEducation.push(
            new FormGroup({
              'institute': new FormControl(education.institute, Validators.required),
              'qualification': new FormControl(education.qualification,Validators.required),
              'date_started': new FormControl(education.date_started, Validators.required),
              'date_ended': new FormControl(education.date_ended, Validators.required),
              'description': new FormControl(education.description, Validators.required)
               
            })
          );
        }
      }

       if (recipe['Workexperience']) {
        for (let Workexperience of recipe.Workexperience) {
          recipeWorkexperience.push(
            new FormGroup({
               'Position': new FormControl(Workexperience.Position, Validators.required),
               'Companyname': new FormControl(Workexperience.Companyname, Validators.required),
              'Location': new FormControl(Workexperience.Location, Validators.required),
              'date_started': new FormControl(Workexperience.date_started, Validators.required),
              'date_ended': new FormControl(Workexperience.date_ended, Validators.required),
              'description': new FormControl(Workexperience.description, Validators.required)
               
            })
          );
        }
      }



       if (recipe['Volunteer']) {
        for (let Volunteer of recipe.Volunteer) {
          recipeVolunteer.push(
            new FormGroup({
               'Position': new FormControl(Volunteer.Position, Validators.required),
               'Companyname': new FormControl(Volunteer.Companyname, Validators.required),
              'Location': new FormControl(Volunteer.Location, Validators.required),
              'date_started': new FormControl(Volunteer.date_started, Validators.required),
              'date_ended': new FormControl(Volunteer.date_ended, Validators.required),
              'description': new FormControl(Volunteer.description, Validators.required)
               
            })
          );
        }
      }



       if (recipe['ContactInfo']) {
        for (let ContactInfo of recipe.ContactInfo) {
          recipeContactInfo.push(
            new FormGroup({
               'LinkedIn': new FormControl(ContactInfo.LinkedIn, Validators.required),
               'Phone': new FormControl(ContactInfo.Phone, Validators.required),
              'Email': new FormControl(ContactInfo.Email, Validators.required),
              'Location': new FormControl(ContactInfo.Location, Validators.required),
             
               
            })
          );
        }
      }


       if (recipe['Interest']) {
        for (let Interest of recipe.Interest) {
          recipeInterest.push(
            new FormGroup({
               'name': new FormControl(Interest.name, Validators.required),
              
             
               
            })
          );
        }
      }



    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'Skills': recipeSkills,
      'education' : recipeEducation,
      'Workexperience' : recipeWorkexperience,
      'Volunteer' : recipeVolunteer,
      'ContactInfo' : recipeContactInfo,
      'Interest' : recipeInterest,
    });
  }

}
