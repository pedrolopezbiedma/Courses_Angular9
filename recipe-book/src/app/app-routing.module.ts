import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeBookComponent } from './recipes-book/recipe-book.component';

export const appRoutes: Routes = [
    { path: '', component: RecipeBookComponent },
    { path: 'recipes-book', loadChildren:() => import('./recipes-book/recipe-book.module').then(m => m.RecipeBookModule)}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
