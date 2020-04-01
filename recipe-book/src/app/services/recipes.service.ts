import { Injectable } from '@angular/core';

import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class RecipeService {
    recipesUpdated = new Subject<Recipe[]>();
    private recipes: Recipe[] = [];

    constructor() { }
    
    private generateNewId(){
        return Math.floor(Math.random() * 10000);
    }

    getRecipes(){
        return this.recipes;
    }

    getRecipe(id: string){
        return this.recipes.find(recipe => {
            return recipe.recipeId === id;
        })
    }

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesUpdated.next(this.recipes);
    }

    addRecipe(newRecipe:Recipe){
        let newIngredients = [];
        if(newRecipe.ingredients.length > 0){
            for (const ingredient of newRecipe.ingredients) {
                newIngredients.push(new Ingredient(ingredient.name, ingredient.amount))
            }
        }
        let recipe = new Recipe(
            (this.generateNewId()).toString(),
            newRecipe.name,
            newRecipe.description,
            newRecipe.imagePath,
            newIngredients
        );
        this.recipes.push(recipe);
        this.recipesUpdated.next(this.recipes);
    }

    editRecipe(recipeId, editedRecipe:Recipe){
        let recipe = this.getRecipe(recipeId);

        if(recipe){
            recipe.name = editedRecipe.name,
            recipe.description = editedRecipe.description,
            recipe.imagePath = editedRecipe.imagePath,
            recipe.ingredients = editedRecipe.ingredients
        }

        this.recipesUpdated.next(this.recipes);
    }

    deleteRecipe(recipeId){
        this.recipes.splice(this.recipes.indexOf(recipeId), 1);
        this.recipesUpdated.next(this.recipes);
    }

}