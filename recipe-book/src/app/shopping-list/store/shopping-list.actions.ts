import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/models/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';

export class AddIngredientAction implements Action {
    readonly type = ADD_INGREDIENT;
    constructor(public ingredient: Ingredient){}
}

export class AddIngredientsAction implements Action {
    readonly type = ADD_INGREDIENTS;
    constructor(public ingredients: Ingredient[]){}
}

export type ShoppingListActions = AddIngredientsAction | AddIngredientAction