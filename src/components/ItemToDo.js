import React, { useContext, useState } from "react";
import { deleteDataTodos, getDataTodos } from "../service/API";
import { DataContext } from "./DataToDoProvider";
import FormEditToDo from "./FormEditToDo";

export default function ItemToDo(props) {
  const { id, taskName, taskLevel } = props.todo;
  const [todos, setTodos, saveLocal] = useContext(DataContext);
  const [onEdit, setOnEdit] = useState(false);
  const [todoEdit, setToDoEdit] = useState({});

  const deleteToDo = (id) => {
    deleteDataTodos(id).then (()=>{
      getDataTodos().then((res)=>{
        setTodos(res.data)
      })
    })

  };
  const handleEdit = (id) => {
    setOnEdit(true);
    const findTodoEdit = todos.filter((todo) => todo.id === id)[0];
    setToDoEdit(findTodoEdit);
  };

  const handleHideFormEdit = () => {
    setOnEdit(false);
  };

  if (onEdit) {
    return (
      <FormEditToDo
        todoEdit={todoEdit}
        handleHideFormEdit={handleHideFormEdit}
      />
    );
  } else {
    return (
      <tr>
        <td className="text-center">{id}</td>
        <td>{taskName}</td>
        <td className="text-center">
          <span
            className={
              taskLevel === "1"
                ? "label label-danger"
                : taskLevel === "2"
                ? "label label-info"
                : "label label-default"
            }
          >
            {taskLevel === "1"
              ? "Hight"
              : taskLevel === "2"
              ? "Medium"
              : "Small"}
          </span>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => {
              handleEdit(id);
            }}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              deleteToDo(id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
