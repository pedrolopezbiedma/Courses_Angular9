import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/models/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';

export class AddIngredientAction implements Action {
    readonly type = ADD_INGREDIENT;
    constructor(public ingredient: Ingredient){}
}

export class AddIngredientsAction implements Action {
    readonly type = ADD_INGREDIENTS;
    constructor(public ingredients: Ingredient[]){}
}

// These 2 actions will be triggered when clicking an intem in the shopping list. 
// They'll manage the editedItem & index within the store.
// Update & Delete Ingredient actions are based on these 2
export class StartEditModeAction implements Action {
    readonly type = START_EDIT;
    constructor(public index: number){}
}

export class StopEditModeAction implements Action {
    readonly type = STOP_EDIT;
    constructor(){}
}

// These 2 actions will be triggered after clicking on an item, and therefore in the reducer we'll already have the selected item.
export class UpdateIngredientAction implements Action {
    readonly type = UPDATE_INGREDIENT;
    constructor(public editedIngredient: Ingredient){}
}

export class DeleteIngredientAction implements Action {
    readonly type = DELETE_INGREDIENT;
    constructor(){}
}

export type ShoppingListActions = 
    AddIngredientAction     |
    AddIngredientsAction    | 
    StartEditModeAction     |
    StopEditModeAction      |     
    UpdateIngredientAction  |
    DeleteIngredientAction