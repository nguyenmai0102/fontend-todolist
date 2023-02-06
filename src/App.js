import ControlToDo from "./components/ControlToDo";
import DataToDoProvider from "./components/DataToDoProvider";
import FormToDo from "./components/FormToDo";
import HeaderToDo from "./components/HeaderToDo";
import ListToDo from "./components/ListToDo";

function App() {
  return (
    <div className="App">
      <div className="container">
        <DataToDoProvider>
          <HeaderToDo />
          <ControlToDo />
          <FormToDo />
          <ListToDo />
        </DataToDoProvider>
      </div>
    </div>
  );
}

export default App;
