import { Ingredient } from '../../models/ingredient.model';
import { ADD_INGREDIENT, ADD_INGREDIENTS, ShoppingListActions } from './shopping-list.actions';

const initState = {
    ingredients : [
        new Ingredient('Potatoes', 10),
        new Ingredient('Apples', 5)
    ]
};

export function shoppingListReducer(state = initState , action: ShoppingListActions ) {
    let newState;
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

