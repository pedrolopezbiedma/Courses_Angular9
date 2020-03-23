import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

export const appRoutes: Routes = [
    { path: '', component: RecipeBookComponent },
    { path: 'recipes-book', component: RecipeBookComponent },
    { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
