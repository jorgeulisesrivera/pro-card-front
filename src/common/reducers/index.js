import { combineReducers } from 'redux';
import TYPES from '../utils/types';

const users = (state = [], action) => {
    switch (action.type) {
        case TYPES.SET_USERS:
            return action.users;
        break;
        default:
            return state; 
    }
};

export default combineReducers({
    users
});
