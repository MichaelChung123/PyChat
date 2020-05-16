import { INCREMENT, DECREMENT } from '../actions/types';

const initialState = {
    number: 0
};

export default function (state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                number: state.number + action.payload 
            }
        case DECREMENT:
            return {
                ...state,
                number: state.number - action.payload 
            }
        default:
            return state;
    }
}