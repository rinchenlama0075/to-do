import React, { Component } from 'react';
import TodoForm from './TodoForm';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      currentTodo: ''
    };
  }

  handleChange = event => {
    this.setState({ currentTodo: event.target.value });
  };
  addItem = event => {
    event.preventDefault();
    this.setState({
      todo: [...this.state.todo, this.state.currentTodo]
    });
    event.target.taskName.value = '';
  };

  Deletor = event => {
    let arr = this.state.todo;
    let newA = arr.splice(event.target.value, 1);
    this.setState({ todo: this.state.todo });
  };

  render() {
    return (
      <div className='Container'>
        <TodoForm submitted={this.addItem} change={this.handleChange} />
        {this.state.todo.map((todo, index) => (
          <li>
            {todo}{' '}
            <button type='button' onClick={this.Deletor} value={index}>
              Delete
            </button>{' '}
          </li>
        ))}
      </div>
    );
  }
}
export default TaskList;
