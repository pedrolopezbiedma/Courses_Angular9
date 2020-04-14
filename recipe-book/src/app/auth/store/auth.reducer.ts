import { User } from 'src/app/models/user.model';
import { AuthActions, LOG_IN, LOG_OUT }  from '../store/auth.actions'

export interface State {
    user: User
}

const initState = {
    user: null,
    token: null
};

export function authReducer(state: State = initState , action: AuthActions ) {
    let newState: State;
    switch (action.type) {
        case LOG_IN:
            newState = {
                ...state,
                user: new User(action.user.email, action.user.id, action.user.token, action.user.expDate)
            }
            return newState;

        case LOG_OUT:
            newState = {
                ...state,
                user: null
            }
            return newState;

        default:
            return state;
    }
}

