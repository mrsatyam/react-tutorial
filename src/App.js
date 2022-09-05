import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {

  return (
    <div className="container">
      <Header className='header' title='Task Tracker' devName="Satyam" > </Header>
      <Tasks> </Tasks>
    </div>
  );
}

export default App;
