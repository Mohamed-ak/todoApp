const shortid = require('shortid');

export const ADD_TODO = 'ADD_TODO';
export function addTodo(title, body){
    // shortid.generate, when called will generate a unique id for our todo
    let id = shortid.generate();
    return {
        type: ADD_TODO,
        id,
        title,
        body
    }
} 

export const TOGGLE_TODO = 'TOGGLE_TODO';
export function toggleTodo(id){
    return {
        type: TOGGLE_TODO,
        id
    }
}

export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
export const Visibility_Filters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: "SHOW_COMPLETED",
    SHOW_ACTIVE: "SHOW_ACTIVE"
}
export function setVisibilityFilter(filter=Visibility_Filters.SHOW_ALL){
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}