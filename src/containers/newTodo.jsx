import { connect } from 'react-redux';
import AddTodo from '../components/addTodo';
import { addTodo } from '../actions';


const mapDispatchToProps = dispatch =>{
    return {
        onSave: (title, body) => dispatch(addTodo(title,body))
    }
}

const NewTodo = connect(
    null,
    mapDispatchToProps
)(AddTodo);

export default NewTodo;