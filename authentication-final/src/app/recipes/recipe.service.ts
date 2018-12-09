import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { education } from '../shared/education.model';
import { Skills } from '../shared/Skills.model';
import { Workexperience } from '../shared/Workexperience.model';
import { Volunteer } from '../shared/Volunteer.model';
import { ContactInfo } from '../shared/ContactInfo.model';
import { Interest } from '../shared/Interest.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
   //  new Recipe(
   //    'User',
   //    'Select the profile and Edit',
   //    'https://img.icons8.com/plasticine/100/000000/user-male.png',
           

      //[
       // new Skills('Angular', 70),
       // new Skills('French Fries', 20),
       // new education('Test','Masters of IT','11-11-2011','11-11-2015','Description'),
      //  new Workexperience('csdcsd','csdcd','cssssssc','11-11-2011','11-11-2015','csdc'),

     // ]),
    // new Recipe('Big Fat Burger',
    //   'What else you need to say?',
    //   'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
    //   [
    //     new Ingredient('Buns', 2),
    //     new Ingredient('Meat', 1)
    //   ])
   ];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
