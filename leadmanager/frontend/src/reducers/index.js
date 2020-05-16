import { combineReducers } from 'redux'
import leads from './leads'
import errors from './errors'
import messages from './messages'
import auth from './auth'
import redux from './redux'
import postReducers from './postReducers'
import increment from './incrementReducer'
import chatMessages from './chatReducers'

export default combineReducers({
    leads,
    errors,
    messages,
    auth,
    redux,
    posts: postReducers,
    increment,
    chatMessages
});

