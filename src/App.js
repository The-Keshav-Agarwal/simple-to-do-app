import React,{Component} from 'react';
import Addform from './addtodo.js'
import Display from './display.js'
let i=0;

class App extends Component {
  state ={
    todos:[]
  }
  componentDidMount(){
    let tid = localStorage.getItem('tasks');
    tid = JSON.parse(tid);
    if(tid){
     let todos =tid.filter(todo=>{
      return true
    })
    this.setState({
      todos:todos
    })
  }
  }
  addTodo=(todo)=>{
     i++;
     todo.id = i;
     let todos=[...this.state.todos ,todo];
     this.setState({
       todos:todos
     });
     localStorage.clear();
     localStorage.setItem('tasks',JSON.stringify(todos))
  }
  deleteTodo = (id)=>{
     let todos = this.state.todos.filter(todo =>{
       return todo.id!==id
     })
     this.setState({
       todos:todos
     })
     localStorage.clear();
     localStorage.setItem('tasks',JSON.stringify(todos))
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
