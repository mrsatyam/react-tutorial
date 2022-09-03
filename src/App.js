import Header from "./components/Header";

function App() {
  const name = 'Brad'

  return (
    <div className="App">
      <Header> </Header>
      <h1> Hello From React</h1>
      <h2>Hello {name} </h2>
      <h3> {2+2}</h3>
    </div>
  );
}

export default App;
