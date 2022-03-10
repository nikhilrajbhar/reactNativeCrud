import { FETCH_USERS, POST_USERS, FETCH_USERS_ERROR } from './actions';
const initialState = {
    userdata: [],
    errorFetching: undefined,
}

export default function userReducer(state = initialState, action) {

    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                userdata: action.data,
                errorFetching: undefined
            }
        case POST_USERS:
            return {
                ...state,
                userdata: action.data,
                errorFetching: undefined,
            }
        case FETCH_USERS_ERROR:
            return {
                ...state,
                userdata: [],
                errorFetching: action.data,
            }
        default:
            return state;
    }
}
