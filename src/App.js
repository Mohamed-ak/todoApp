import React from 'react';
import NavBar from './components/navbar';
import NewTodo from './containers/newTodo';
import ConnectedTodoList from './containers/visibleTodoList';
function App() {
  return (
    <div className="container-fluid">
      <NavBar />
      <NewTodo />
      <ConnectedTodoList />
    </div>
  );
}

export default App;
