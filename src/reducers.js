import { combineReducers } from 'redux';

import {
    SET_VISIBILITY_FILTER,
    Visibility_Filters,
    ADD_TODO,
    TOGGLE_TODO
} from './actions';

const { SHOW_ALL } = Visibility_Filters;

function visibilityFilter(state=SHOW_ALL, action){
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function todos(state=[], action){
    switch(action.type){
        case ADD_TODO:
            return [...state, {
                id: action.id,
                title: action.title,
                body: action.body,
                completed: false
            }
            ]
        case TOGGLE_TODO:
            return state.map(todo=>{
                if (todo.id === action.id){
                    // Objects are passed by reference. so by using  Object.assign I create a new object(todo is not changed!)
                    return Object.assign({}, todo, {completed: !todo.completed})
                }
                return todo
            })
        default:
            return state
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;