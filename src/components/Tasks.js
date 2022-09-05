import Task from "./Task";

const Tasks = ({tasks}) => {
  return (    
    <>
      {tasks.map(task => <Task task={task}> </Task>)}
    </>
  );
}

export default Tasks;
