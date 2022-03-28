import { ADD_POSITIONS} from './posActions';

export const posReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_POSITIONS: {
            return action.positions;
        }


        default:
            return state;
    }
}
