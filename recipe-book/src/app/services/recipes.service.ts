import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';

@Injectable({providedIn: 'root'})
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            '0',
            'A test recipe', 
            'This is simply a test',
            'https://assets.epicurious.com/photos/5d49f1ea888da200097dce24/6:4/w_620%2Ch_413/TomatoesHerbs_RECIPE_073119_278.jpg',
            [new Ingredient('Patata', 1)]
        ),
        new Recipe(
            '1',
            'A second test recipe', 
            'This is simply a test',
            'https://assets.epicurious.com/photos/5d49f1ea888da200097dce24/6:4/w_620%2Ch_413/TomatoesHerbs_RECIPE_073119_278.jpg',
            [new Ingredient('Patata', 1)]
        )
    ];
    
    selectedRecipe = new EventEmitter<Recipe>();

    constructor() { }
    
    getRecipes(){
        return this.recipes;
    }

    getRecipe(id: string){
        return this.recipes.find(recipe => {
            return recipe.recipeId === id;
        })
    }
}