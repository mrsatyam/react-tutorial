import {FaTimes} from 'react-icons/fa'
const Task = ({task}) => {
  return (
    <div className="task">
      <h3 key={task.key}> {task.text} <FaTimes style={{color:'red', cursor:'pointer'}}></FaTimes> </h3>
    </div>
  );
}

export default Task;
