import {SEND_MSG, GET_MSGS} from '../actions/types'

const initialState = {
    messages: []
}

export default function (state = initialState, action) {
    switch(action.type) {
        case SEND_MSG:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        case GET_MSGS:
            return {
                ...state,
                messages: action.payload
            }
        default:
            return state;
    }
}