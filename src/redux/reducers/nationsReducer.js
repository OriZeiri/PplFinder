import { ADD_NATION, REMOVE_NATION } from "redux/actions/nationsActions";

const nationsReducer = (state = [] , action) => {
    switch(action.type)
    {
        case ADD_NATION:
            const newState = [...state, action.payload];
            return newState;

        case REMOVE_NATION:
            return state.filter(item => item !== action.payload);
        
        // case 'RESET':
        //     return 1;
            
        default:
            return state;
    }
}


export default nationsReducer;