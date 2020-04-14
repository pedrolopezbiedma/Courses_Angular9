import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Ingredient } from '../models/ingredient.model';
import * as fromApp from '../store/app.reducer';
import { AddIngredientAction, AddIngredientsAction, DeleteIngredientAction, StartEditModeAction, StopEditModeAction, UpdateIngredientAction } from '../shopping-list/store/shopping-list.actions';

@Injectable({providedIn: 'root'})
export class IngredientsService {
    constructor(
        private store: Store<fromApp.AppState> 
    ) { }

    emitIngredientSelected(index: number){
        this.store.dispatch(new StartEditModeAction(index));
    }
    emitIngredientNotSelected(){
        this.store.dispatch(new StopEditModeAction());
    }

    addIngredient(newIngredient: Ingredient){
        this.store.dispatch(new AddIngredientAction(newIngredient));
    }

    addIngredientsFromRecipe(ingredients: Ingredient[]){
        this.store.dispatch(new AddIngredientsAction(ingredients))
    }

    editIngredient(editedIngredient: Ingredient){
        this.store.dispatch(new UpdateIngredientAction(editedIngredient));
    }

    deleteIngredient(){
        this.store.dispatch(new DeleteIngredientAction());
    }
}