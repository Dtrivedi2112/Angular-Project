import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgArrayPipesModule, NgStringPipesModule } from 'angular-pipes';
import { NgPipesModule, NgObjectPipesModule, NgAggregatePipesModule} from 'angular-pipes';
import { JoinPipe } from 'angular-pipes';

import {MatCheckboxModule} from '@angular/material/checkbox';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { ProfileEditComponent } from './Profile/profile-edit/profile-edit.component';
import { ProfileDetailComponent } from './Profile/profile-detail/profile-detail.component';
import { ProfileStartComponent } from './profile/profile-start/profile-start.component';
import { ProfileListComponent } from './profile/profile-list/profile-list.component';
import { ProfileItemComponent } from './profile/profile-list/profile-item/profile-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    SignupComponent,
    SigninComponent,
    ProfileEditComponent,
    ProfileDetailComponent,
    ProfileStartComponent,
    ProfileListComponent,
    ProfileItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    NgArrayPipesModule,
    NgStringPipesModule,
    NgPipesModule,
    NgArrayPipesModule,
    NgObjectPipesModule,
    MatCheckboxModule

  ],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
