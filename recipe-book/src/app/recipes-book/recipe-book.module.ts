import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RecipeBookComponent } from './recipe-book.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { NoRecipeSelectedComponent } from './no-recipe-selected/no-recipe-selected.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesRoutingModule } from './recipes-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RecipesRoutingModule,
    ],
    exports: [
        RecipeBookComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeEditComponent,
        RecipeDetailComponent,
        NoRecipeSelectedComponent
    ],
    declarations: [
        RecipeBookComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeEditComponent,
        RecipeDetailComponent,
        NoRecipeSelectedComponent
    ],
    providers: [],
})
export class RecipeBookModule { }
