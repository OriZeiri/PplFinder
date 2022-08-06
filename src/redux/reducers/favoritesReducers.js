import {REMOVE_FAVORITE_USER, GET_FROM_LOCAL_STORAGE , SAVE_FAVORITE_USER , CONSTANT_LOCAL_STORAGE_NAME} from "../actions/favoritesActions"

const favoritesReducers = (state = [], action) => {
    switch (action.type) {

        case REMOVE_FAVORITE_USER:
            const newUsers = state.filter(favUser => favUser !== action.payload);
            localStorage.setItem(CONSTANT_LOCAL_STORAGE_NAME, JSON.stringify(newUsers));
            return newUsers;

        case GET_FROM_LOCAL_STORAGE:
            return action.payload;

        case SAVE_FAVORITE_USER:
            if (!state.includes(action.payload)) {
                const newUsers = state.concat(action.payload)
                localStorage.setItem(CONSTANT_LOCAL_STORAGE_NAME, JSON.stringify(newUsers));
                return newUsers;
            }
            else {
                return state;
            }
        default:
            return state;
    }

}
export default favoritesReducers;