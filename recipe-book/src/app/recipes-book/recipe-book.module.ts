import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RecipeBookComponent } from './recipe-book.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { NoRecipeSelectedComponent } from './no-recipe-selected/no-recipe-selected.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        RecipesRoutingModule,
    ],
    exports: [
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
