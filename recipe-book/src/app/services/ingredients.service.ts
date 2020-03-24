import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../models/ingredient.model';

@Injectable({providedIn: 'root'})
export class IngredientsService {
    //ingredientAdded = new EventEmitter<Ingredient[]>();
    ingredientAdded = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 2)
    ];

    constructor() { }
    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(newIngredient: Ingredient){
        this.ingredients.push(newIngredient);
        //this.ingredientAdded.emit(this.ingredients);
        this.ingredientAdded.next(this.ingredients);
    }

    addIngredientsFromRecipe(ingredients: Ingredient[]){
        ingredients.forEach(ingredient => {
            this.ingredients.push(ingredient);
        })
        //this.ingredientAdded.emit(this.ingredients);
        this.ingredientAdded.next(this.ingredients);
    }
}