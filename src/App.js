import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";


function App() {
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
      <Header className='header' title='Task Tracker' devName="Satyam" > </Header>
      {tasks.length > 0 ? 
          
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} > </Tasks> 
          : <span style={{color:'green'}}>"No tasks for today, Enjoy!"</span>
      }
    </div>
  );
}

export default App;
