import {SEND_MSG} from './types';

export const sendMessage = message = dispatch => {
    dispatch({
        type: SEND_MSG,
        payload: message
    })
}