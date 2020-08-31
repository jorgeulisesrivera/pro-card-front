
import TYPES from "../utils/types";

const fetchUsersAction = () => ({type: TYPES.FETCH_USERS});

const setLoadingUserAction = (loading) => ({type: TYPES.SET_LOADING_USER,loading});

const createUserAction = (user) => ({type: TYPES.CREATE_USER,user});

const updateUserAction = (user,id) => ({type: TYPES.UPDATE_USER,user,id});

export {
    fetchUsersAction,
    setLoadingUserAction,
    createUserAction,
    updateUserAction
};