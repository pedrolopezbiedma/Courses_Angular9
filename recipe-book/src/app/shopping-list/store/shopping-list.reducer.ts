import { Ingredient } from '../../models/ingredient.model';
import { AddIngredient } from './shopping-list.actions';

const initState = {
    ingredients : [
        new Ingredient('Potatoes', 10),
        new Ingredient('Apples', 5)
    ]
};

export function shoppingListReducer(state = initState , action: AddIngredient ) {
    switch (action.type) {
        case 'ADD_INGREDIENT':
            let newState = {
                ...state,
                ingredients: [...state.ingredients, action.ingredient]
            }
            return newState;
    
        default:
            return state;
    }
}

