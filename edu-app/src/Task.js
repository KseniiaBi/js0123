import React from 'react';
import del from './delete.png';
import edit from './edit.png';

class Task extends React.Component{
    constructor(props){
        super(props);
        this.span = React.createRef();
        this.input = React.createRef();
    }

    startEdit(){
        this.span.current.classList.add('hidden');
        this.input.current.classList.remove('hidden');
    }
  
    finishEdit(event){
        if(event.key === 'Enter'){
            this.props.edit(this.props.todo.id, this.input.current.value);
            this.span.current.classList.remove('hidden');
            this.input.current.classList.add('hidden');
        } 
    }

    render(){
        return(
        <li className={this.props.todo.done ? 'done' : null} data-id={this.props.todo.id}>
            <span ref={this.span} onClick={() => this.props.done(this.props.todo.id)}>{this.props.todo.task}</span>
            <input ref={this.input} onKeyDown={(event)=>this.finishEdit(event)} type='text' className='hidden' defaultValue={this.props.todo.task} />
            <img onClick={()=> this.props.del(this.props.todo.id)} className='del_btn' src={del} alt="delete"/>
            <img onClick={()=>this.startEdit()} className='edit_btn' src={edit} alt="edit"/>
        </li>
        )
    }
  }

  export default Task;