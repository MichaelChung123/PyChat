import {SEND_MSG, GET_MSGS} from './types';

export const sendMessage = message => dispatch => {
    dispatch({
        type: SEND_MSG,
        payload: message
    })
}

export const getChatMessages = () => dispatch => {
    dispatch({
        type: GET_MSGS,
        payload: []
    })
}