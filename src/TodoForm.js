import React from 'react';

const TodoForm = props => {
  return (
    <div>
      <form onSubmit={props.submitted}>
        <label htmlFor='taskName'>Task Name: </label>

        <input
          onChange={props.change}
          name='taskName'
          type='text'
          placeholder='Add to-do here'
        />

        <button type='submit'>Add Task</button>
      </form>
    </div>
  );
};
export default TodoForm;
