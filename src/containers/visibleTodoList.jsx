import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/todoList';

const getVisibileTodos = (todos , filter)=>{
    switch(filter){
        case "SHOW_COMPLETED":
            return todos.filter(todo=>todo.completed)
        case "SHOW_ACTIVE":
            return todos.filter(todo=>!todo.completed)
        case "SHOW_ALL":
        default:
            return todos
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibileTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onToggle: (id)=>dispatch(toggleTodo(id))
    }
}

const ConnectedTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default ConnectedTodoList;