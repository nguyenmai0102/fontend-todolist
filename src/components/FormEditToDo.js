import React, { useContext, useRef, useState } from "react";
import { editDataTodos, getDataTodos } from "../service/API";
import { DataContext } from "./DataToDoProvider";

export default function FormEditToDo(props) {
  const { id, taskName, taskLevel } = props.todoEdit;
  const [ todos,setTodos] = useContext(DataContext);
  const nameRef = useRef();
  const levelRef = useRef();
  const handleSaveEdit = () => {
    const data = {
      taskName: nameRef.current.value,
      taskLevel: levelRef.current.value,
    }
    editDataTodos (id, data).then(()=>{
      getDataTodos().then((res)=>{
        setTodos(res.data);
      });
    });

   props.handleHideFormEdit();
   
  };

  return (
    <tr>
      <td className="text-center">{id}</td>
      <td>
        <input
          className="form-control"
          type="text"
          defaultValue={taskName}
          ref={nameRef}
        />
      </td>
      <td>
        <select
          ref={levelRef}
          defaultValue={taskLevel}
          className="form-control"
        >
          <option value="1">High</option>
          <option value="2">Medium</option>
          <option value="3">Small</option>
        </select>
      </td>
      <td>
        <button className="btn btn-info" onClick={handleSaveEdit}>
          Save
        </button>
      </td>
    </tr>
  );
}
