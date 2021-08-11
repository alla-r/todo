import React, { Component } from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from '../item-add-form/item-add-form';
import './app.css';

export default class App extends Component {
  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 },
    ]
  };

  deleteItem = (id) => {
    console.log('del', id);
    this.setState(({ todoData }) => {
      const newArr = todoData.filter((el) => el.id !== id);

      return {
        todoData: newArr
      }
    });
  };

  render() {
    const { todoData } = this.state;
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={todoData}
          onDeleted={ this.deleteItem } />
        <ItemAddForm />
      </div>
    );
  }

}