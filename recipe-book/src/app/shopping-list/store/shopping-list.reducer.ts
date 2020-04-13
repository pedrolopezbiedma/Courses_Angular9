import { Ingredient } from '../../models/ingredient.model';
import { ADD_INGREDIENT, ADD_INGREDIENTS, ShoppingListActions } from './shopping-list.actions';

export interface State {
    ingredients: Ingredient[];
    editedIngredient: Ingredient,
    editedIngredientIndex: number
}

export interface AppState{
    shoppingList: State
}

const initState: State = {
    ingredients : [
        new Ingredient('Potatoes', 10),
        new Ingredient('Apples', 5)
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
};

export function shoppingListReducer(state: State = initState, action: ShoppingListActions ) {
    let newState: State;
    switch (action.type) {
        case ADD_INGREDIENT:
            newState = {
                ...state,
                ingredients: [...state.ingredients, action.ingredient]
            }
            return newState;
    
        case ADD_INGREDIENTS:
            newState = {
                ...state,
                ingredients: [...state.ingredients, ...action.ingredients]
            }
            return newState;
        default:
            return state;
    }
}

