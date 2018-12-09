import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';
import { ProfileEditComponent } from './Profile/profile-edit/profile-edit.component';
import { ProfileDetailComponent } from './Profile/profile-detail/profile-detail.component';
import { ProfileStartComponent } from './profile/profile-start/profile-start.component';
import { ProfileListComponent } from './profile/profile-list/profile-list.component';
import { ProfileItemComponent } from './profile/profile-list/profile-item/profile-item.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/data', pathMatch: 'full' },
  { path: 'data', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },
  ] },
  { path: 'profiles', component: RecipesComponent, children: [
    { path: '', component: ProfileStartComponent },
    { path: 'new', component: ProfileEditComponent, canActivate: [AuthGuard] },
    { path: ':id', component: ProfileDetailComponent },
    { path: ':id/edit', component: ProfileEditComponent, canActivate: [AuthGuard] },
  ] },
  { path: 'jobs', component: ShoppingListComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
