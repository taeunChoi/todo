import React, { Component } from 'react';
import './App.css';
import TodoListTemplate from './TodoListTemplate';
import Form from './Form'
import TodoItemList from './TodoItemList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoListTemplate form={<Form/>}>
          <TodoItemList />
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;
