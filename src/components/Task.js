import {FaTimes} from 'react-icons/fa'
const Task = ({task, onDelete}) => {
  return (
    <div className="task">
      <h3 key={task.key}> {task.text} 
      <FaTimes style={{color:'red', cursor:'pointer'}} onClick={() => {onDelete(task.id)}}></FaTimes>
      </h3>
    </div>
  );
}

export default Task;
