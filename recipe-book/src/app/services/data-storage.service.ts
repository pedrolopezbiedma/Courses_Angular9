import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { RecipeService } from './recipes.service';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private httpClient: HttpClient,
                private recipesService: RecipeService) { }
    
    storeRecipes(){
        let recipes = this.recipesService.getRecipes();
        this.httpClient.
            put('https://angular-recipe-book-d98cb.firebaseio.com/recipes.json',
                recipes
            )
            .subscribe();
    }

    fetchRecipes(){
        this.httpClient
            .get<Recipe[]>('https://angular-recipe-book-d98cb.firebaseio.com/recipes.json')
            .pipe(tap(recipes => {
                console.log(recipes);

                let newArray: Recipe[] = [];
                for (const recipe of recipes) {
                    if(!recipe.ingredients || recipe.ingredients.length === 0){
                        recipe.ingredients = [];
                    }
                    newArray.push(recipe);
                }
            }))
            .subscribe(recipes => {
                console.log('La segunda vez');
                console.log(recipes);
                this.recipesService.setRecipes(recipes);
            })
    }
}