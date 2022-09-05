import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";


function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
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
  ])

  //add task 
  const addTask = (task)=>{
    const id = Math.floor(Math.random()*1000 + 1);
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
  //delete task
  const deleteTask = (id)=>{
    setTasks(tasks.filter(task => task.id !== id))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder}: task))
  }
  return (
    <div className="container">
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask} className='header' title='Task Tracker' devName="Satyam" > </Header>
      { showAddTask ? <AddTask onAdd={addTask} > </AddTask> : ''}

      {tasks.length > 0 ? 
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} > </Tasks> 
          : <span style={{color:'green'}}>"No tasks for today, Enjoy!"</span>
      }

    </div>
  );
}

export default App;
