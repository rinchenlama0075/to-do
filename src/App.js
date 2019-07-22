import React, { Component } from 'react';
import './App.css';
import TaskList from './taskList';
import Todoform from './TodoForm';

class todo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <TaskList />
      </div>
    );
  }
}
export default todo;
