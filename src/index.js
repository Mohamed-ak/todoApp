import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './customStyle.css'

const store = createStore(todoApp);

ReactDOM.render(
<Provider store={store}>
   <App /> 
</Provider>, 
document.getElementById('root'));

