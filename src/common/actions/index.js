
import TYPES from "../utils/types";

const setUsers = (users) => ({
    type: TYPES.SET_USERS,
    users,
});

export {
    setUsers
};