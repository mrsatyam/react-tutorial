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
  return (
    <div className="container">
      <Header className='header' title='Task Tracker' devName="Satyam" > </Header>
      <Tasks tasks={tasks}> </Tasks>
    </div>
  );
}

export default App;
