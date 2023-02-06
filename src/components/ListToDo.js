import React, { useContext } from "react";
import { DataContext } from "./DataToDoProvider";
import ItemToDo from "./ItemToDo";

export default function ListToDo() {
  const [todos, setTodos] = useContext(DataContext);
  return (
    <div className="panel panel-success">
      <div className="panel-heading">List Task</div>
      <table className="table table-hover ">
        <thead>
          <tr>
            <th style={{ width: "10%" }} className="text-center">
              #
            </th>
            <th>Task</th>
            <th style={{ width: "20%" }} className="text-center">
              Level
            </th>
            <th style={{ width: "20%" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <ItemToDo todo={todo} key={todo.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
