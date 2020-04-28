import React, {Component} from 'react';

class Addform extends Component{
    state={
        todo:null
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state);
        document.getElementById('todo').value = null;
    }
    render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Add to-do...." id="todo" onChange={this.handleChange} required spellCheck='false'/>
                <button className='create'>Create</button>
            </form>
        </div>
    )}
}
export default Addform;