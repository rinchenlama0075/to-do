import React,{Component} from 'react';
import './App.css';

class todo extends Component{


  constructor(){
    super();
    this.state={
      todo:[],
      currentTodo: "",
      
    }
  }

  addItem = event=>{
    event.preventDefault();
    
    //this.state.todo.push(this.state.x);
    this.setState({
      todo:[...this.state.todo, this.state.currentTodo]
    })
    console.log(this.state.todo);
    console.log("addItem fired");
    event.target.taskName.value = '';
    


  }
  handleChange=event=>{
    this.setState({currentTodo: event.target.value});
  }

  Deletor=event=>
  {
    console.log("delete fired");
      
  }

  render()
  {
    return(
      
      <div className="Container">
        <form onSubmit={this.addItem}>
          <label htmlFor="taskName">Task Name: </label>

          <input onChange={this.handleChange} name="taskName" type="text" placeholder="Add to-do here" />

          <button type="submit">Add Task</button>
        </form>
           
             {this.state.todo.map((todo) =>
              <li>{todo} <button type="button" onClick={this.Deletor}>Delete</button>  </li> 
                    )}
                  
    </div>
  )
}

}
export default todo;
