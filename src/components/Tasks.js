const Tasks = () => {
  const tasks = [
    {
      id:1,
      text: "Doctor's Appointment",
      day: 'Feb 5th a 2:30 pm',
      reminder:true
    },
    {
      id:2,
      text: "Meeting at school",
      day: 'Feb 6th a 1:30 pm',
      reminder:true
    },
    {
      id:3,
      text: "Food shopping",
      day: 'Feb 5th a 2:30 pm',
      reminder:false
    }
  ];
  return (
    
    <>
      {tasks.map(task => <h3 key={task.id}> {task.text} </h3>)}
    </>
  );
}

export default Tasks;
