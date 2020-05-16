import {SEND_MSG} from '../actions/types'

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
    }
}