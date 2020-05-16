import { INCREMENT, DECREMENT } from './types';

export const add = (number) => dispatch => {
    dispatch({
        type: INCREMENT,
        payload: number
    })
};

export const minus = (number) => dispatch => {
    dispatch({
        type: DECREMENT,
        payload: number
    })
};