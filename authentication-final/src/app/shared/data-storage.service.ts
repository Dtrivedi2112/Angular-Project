import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeRecipes() {
    const token = this.authService.getIdToken();

    return this.http.put('https://angular-82f73.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getIdToken();

    this.http.get('https://angular-82f73.firebaseio.com/recipes.json?auth=' + token)
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();

          for (let recipe of recipes) {
            if (!recipe['Skills']) {
              recipe['Skills'] = [];
            }
          }

           for (let recipe of recipes) {
            if (!recipe['education']) {
              recipe['education'] = [];
            }
          }


           for (let recipe of recipes) {
            if (!recipe['Workexperience']) {
              recipe['Workexperience'] = [];
            }
          }
          

          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}