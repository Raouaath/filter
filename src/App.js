import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ListTask from "./Components/ListTask";
import AddTask from "./Components/AddTask";

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
