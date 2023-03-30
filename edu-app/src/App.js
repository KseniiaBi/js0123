
import './App.css';
import React from 'react';
import List from './List.js';


class ToDoList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
    this.todoinput = React.createRef();
    this.onDone = this.onDone.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  onSave(event){
    event.preventDefault();
    const text = this.todoinput.current.value;
    if(text.length > 2){
      let todo = {
        id: Date.now(),
        task: text,
        done: false
      }
      this.setState({
        todos: [...this.state.todos, todo]
      });
      this.todoinput.current.value = '';
    }
  }

  onDone(id){
    const todosCopy = this.state.todos.slice();
    todosCopy.forEach(item=>{
      if(item.id === id){
        item.done = !item.done;
      }
    });
    this.setState({
      todos: [...todosCopy]
    });
  }

  onDelete(id){
    const todosCopy = this.state.todos.slice();
    todosCopy.forEach((item,index)=>{
      if(item.id === id){
       todosCopy.splice(index,1);
      }
    });
    this.setState({
      todos: [...todosCopy]
    });
  }

  onEdit(id, newtext){
    const todosCopy = this.state.todos.slice();
    todosCopy.forEach((item)=>{
      if(item.id === id){
       item.task = newtext;
      }
    });
    this.setState({
      todos: [...todosCopy]
    });
  }

  render(){
    return(
      <>
        <form onSubmit={(event) => this.onSave(event)}>
          <input ref={this.todoinput} type="text" placeholder='type your task' />
          <input type="submit" value='save' />
        </form>

        {
          this.state.todos.length > 0 ?  <List onDone={this.onDone} onDelete={this.onDelete} onEdit={this.onEdit} tasks={this.state.todos} />
                                      :  <h3>No tasks yet, type them in form above</h3>
        }
      </>
    )
  }
}

export default ToDoList;