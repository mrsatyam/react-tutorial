import Header from "./components/Header";

function App() {

  return (
    <div className="App">
      <Header title={3+5} devName="Satyam" > </Header>
      <h1> Hello From React</h1>
      <h3> {2+2}</h3>
    </div>
  );
}

export default App;
