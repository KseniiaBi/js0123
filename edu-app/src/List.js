import Task from './Task.js';

const List = (props) => {
    return(
      <ol className='todolist'>
        {
          props.tasks.map((item, index) => <Task done={props.onDone} del={props.onDelete} edit={props.onEdit} todo={item} key={index} />)
        }
      </ol>
      )
  };

  export default List;