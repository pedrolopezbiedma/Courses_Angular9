import { User } from 'src/app/models/user.model';
import { AUTH_SUCCESS, AUTH_ERROR, LOG_OUT, CLEAR_ERROR, AuthActions}  from '../store/auth.actions'

export interface State {
    user: User,
    loginError: string,
    isLoading: boolean
}

const initState = {
    user: null,
    loginError: null,
    isLoading: false
};

export function authReducer(state: State = initState , action: AuthActions ) {
    let newState: State;
    switch (action.type) {
        case AUTH_SUCCESS:
            newState = {
                ...state,
                user: new User(action.user.email, action.user.id, action.user.token, action.user.expDate),
                loginError: null,
                isLoading: false
            }
            return newState;

        case AUTH_ERROR:
            newState = {
                ...state,
                user: null,
                loginError: action.error,
                isLoading: false
            }
            return newState;

        case CLEAR_ERROR:
        case LOG_OUT:
            newState = {
                ...state,
                user: null,
                loginError: null,
                isLoading: false
            }
            return newState;

        default:
            return state;
    }
}

