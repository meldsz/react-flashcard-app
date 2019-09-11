import { combineReducers } from 'redux';
import { SET_STACK, LOAD_STACK, ADD_STACK } from '../actions/index';

function stack(state = {}, action) {
    switch (action.type) {
        case SET_STACK:
            return action.stack;
        default:
            return state;
    }
}

function stacks(state = [], action) {
    switch (action.type) {
        case LOAD_STACK:
            return action.stacks;
        case ADD_STACK:
            return [...state, { id: state.length, ...action.stack }];

        default:
            return state;
    }
}

export default combineReducers({ stack, stacks });