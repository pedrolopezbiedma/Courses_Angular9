import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../models/ingredient.model';

@Injectable({providedIn: 'root'})
export class IngredientsService {
    ingredientAdded = new Subject<Ingredient[]>();
    ingredientClicked = new Subject<Ingredient>();
    indexToEdit: number;
    private ingredients: Ingredient[] = [];

    constructor() { }
    getIngredients(){
        return this.ingredients.slice();
    }

    emitIngredientSelected(index: number){
        this.indexToEdit = index;
        this.ingredientClicked.next(this.ingredients[index]);
    }

    addIngredient(newIngredient: Ingredient){
        this.ingredients.push(newIngredient);
        this.ingredientAdded.next(this.ingredients);
    }

    addIngredientsFromRecipe(ingredients: Ingredient[]){
        ingredients.forEach(ingredient => {
            this.ingredients.push(ingredient);
        })
        this.ingredientAdded.next(this.ingredients);
    }

    editIngredient(editedIngredient: Ingredient){
        this.ingredients[this.indexToEdit].name = editedIngredient.name;
        this.ingredients[this.indexToEdit].amount = editedIngredient.amount;
        this.ingredientAdded.next(this.ingredients);
    }

    deleteIngredient(){
        this.ingredients.splice(this.indexToEdit, 1);
        this.ingredientAdded.next(this.ingredients);
    }
}