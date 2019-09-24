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
