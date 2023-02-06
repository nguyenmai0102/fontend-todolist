import React, { useContext, useRef } from "react";
import { addDataTodos, getDataTodos } from "../service/API";
import { DataContext } from "./DataToDoProvider";


export default function FormToDo() {
  const task_name = useRef();
  const task_level = useRef();
  const id = useRef(0);

  const [todos, setTodos, saveLocal] = useContext(DataContext);

  const handleAddToDo = (event) => {
    if (task_name.current.value == "") {
      event.preventDefault();
    } else {
      const data ={
        taskName: task_name.current.value,
          taskLevel: task_level.current.value,
      }
     
      addDataTodos(data).then(()=>{
        getDataTodos().then((res)=>{
          setTodos(res.data);
        })
      });
   
    }

    task_name.current.value = "";
  };

  const handleCancel = () => {
    task_name.current.value = "";
  };
  return (
    <>
      {/* FORM : START */}
      <div className="row">
        <div className="col-md-offset-7 col-md-5">
          <form action="" method="POST" className="form-inline">
            <div className="form-group">
              <label className="sr-only" htmlFor="">
                label
              </label>
              <input
                type="text"
                required
                className="form-control"
                placeholder="Task Name"
                ref={task_name}
              />
            </div>
            <div className="form-group">
              <label className="sr-only" htmlFor="">
                label
              </label>
              <select
                name="ds"
                id="inputDs"
                className="form-control"
                required="required"
                ref={task_level}
              >
                Small
                <option value={1}>High</option>
                <option value={2}>Medium</option>
                <option value={3}>Small</option>
              </select>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleAddToDo}
            >
              Submit
            </button>
            <button
              type="button"
              className="btn btn-default"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
      {/* FORM : END */}
    </>
  );
}
