import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

export const getItems = (items) => (dispatch, getState) => {
    dispatch({
        type: GET_ITEMS,
        payload: items
    })
};

// ADD ITEM
export const addItem = (item) => (dispatch, getState) => {
    dispatch({
        type: ADD_ITEM,
        payload: item
    })
};


// DELETE ITEM
export const deleteItem = (content) => (dispatch, getState) => {
    dispatch({
        type: DELETE_ITEM,
        payload: content
    })
};