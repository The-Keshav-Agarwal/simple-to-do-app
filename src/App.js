import React,{Component} from 'react';
import Addform from './addtodo.js'
import Display from './display.js'
let i=0;

class App extends Component {
  state ={
    todos:[]
  }
  addTodo=(todo)=>{
     i++;
     todo.id = i;
     let todos=[...this.state.todos ,todo];
     this.setState({
       todos:todos
     });
  }
  deleteTodo = (id)=>{
     let todos = this.state.todos.filter(todo =>{
       return todo.id!==id
     })
     this.setState({
       todos:todos
     })
  }
  render(){
  return (
    <div className="App">
      <h1>My Todo App</h1>
      <Addform addTodo={this.addTodo}/>
      <Display todos = {this.state.todos} deleteTodo={this.deleteTodo}/>
    </div>
  )};
}

export default App;
