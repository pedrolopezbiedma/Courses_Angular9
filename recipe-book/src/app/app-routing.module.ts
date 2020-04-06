import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { RecipeBookComponent } from './recipes-book/recipe-book.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'recipes-book', pathMatch: 'full' },
    { path: 'recipes-book', loadChildren:() => import('./recipes-book/recipe-book.module').then(m => m.RecipeBookModule)},
    { path: 'shopping-list', loadChildren:() => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule)},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class AppRoutingModule { }
