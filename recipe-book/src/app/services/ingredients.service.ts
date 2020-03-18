import { Injectable, EventEmitter } from '@angular/core';

import { Ingredient } from '../models/ingredient.model';

@Injectable({providedIn: 'root'})
export class IngredientsService {

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 2)
    ];
    ingredientAdded = new EventEmitter<Ingredient[]>();

    constructor() { }
    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(newIngredient: Ingredient){
        this.ingredients.push(newIngredient);
        this.ingredientAdded.emit(this.ingredients);
    }

    addIngredientsFromRecipe(ingredients: Ingredient[]){
        ingredients.forEach(ingredient => {
            this.ingredients.push(ingredient);
        })
        this.ingredientAdded.emit(this.ingredients);
    }
}