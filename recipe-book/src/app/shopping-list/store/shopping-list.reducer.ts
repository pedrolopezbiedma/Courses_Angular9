import { Ingredient } from '../../models/ingredient.model';
import { ADD_INGREDIENT, ADD_INGREDIENTS, UPDATE_INGREDIENT, DELETE_INGREDIENT, ShoppingListActions, START_EDIT, STOP_EDIT } from './shopping-list.actions';

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
 
        case START_EDIT:
            newState = {
                ...state,
                editedIngredient: state.ingredients[action.index],
                editedIngredientIndex: action.index
            }
            return newState;

        case STOP_EDIT:
            newState = {
                ...state,
                editedIngredient: null,
                editedIngredientIndex: -1
            }
            return newState;
            
        case UPDATE_INGREDIENT:
            let newIngredients = [...state.ingredients];
            let updatedIngredient = new Ingredient(action.editedIngredient.name, action.editedIngredient.amount);
            newIngredients[state.editedIngredientIndex] = updatedIngredient;

            newState = {
                ...state,
                ingredients : [...newIngredients]
            }
            return newState;

        case DELETE_INGREDIENT:
            let updatedIngredients = state.ingredients.filter((ingredient, index) => {
                if(index !== state.editedIngredientIndex){
                    return true;
                }
            })
            newState = {
                ...state,
                ingredients: updatedIngredients
            }
            return newState;

        default:
            return state;
    }
}

