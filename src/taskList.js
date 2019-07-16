import React,{Component} from 'react';


class TaskList extends Component{
constructor(props){

    super(props)
    this.state={
        todo:[],
      currentTodo: "",
    }
}
    
  addItem = event=>{
    event.preventDefault();
    this.setState({
      todo:[...this.state.todo, this.state.currentTodo]
    })
    event.target.taskName.value='';
  }
  handleChange=event=>{
    this.setState({currentTodo: event.target.value});
  }

  Deletor=event=>
  {
    let arr=this.state.todo;
    let newA=arr.splice(event.target.value, 1);
    this.setState({todo: this.state.todo})
    }

  render()
  {
    return(
      
      <div className="Container">
        <form onSubmit={this.addItem}>
          <label htmlFor="taskName">Task Name: </label>

          <input onChange={this.handleChange}
           name="taskName" type="text" placeholder="Add to-do here" />

          <button type="submit">Add Task</button>
        </form>
           
             {this.state.todo.map((todo, index) =>
              <li>{todo} <button type="button" onClick={this.Deletor} value={index}>Delete</button>  </li> 
                    )}
                  
    </div>
  )
}
    
}
export default TaskList;