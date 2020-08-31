import { combineReducers } from 'redux';
import TYPES from '../utils/types';

const users = (state = [], action) => {
    switch (action.type) {
        case TYPES.SET_USERS:
            return action.users;
        break;
        case TYPES.ADD_USER:
            return [...state,action.user];
        break;
        case TYPES.MODIFY_USER:
            let widthout = state.filter(row=>row.id!=action.id);
            widthout.push(action.user);
            return widthout;
        break;
        default:
            return state; 
    }
};

const loadingUsers = (state = false, action) => {
    switch (action.type) {
        case TYPES.SET_LOADING_USER:
            return action.loading;
        break;
        default:
            return state; 
    }
};

export default combineReducers({
    users,
    loadingUsers
});
