import React, { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "./DataToDoProvider";

export default function ControlToDo() {
  const search = useRef();
  const [todos, setTodos] = useContext(DataContext);

  const hanldeSearch = () => {
    const todoStore = JSON.parse(localStorage.getItem("todoStore"));
    let todoSearch = [];
    if (todoStore) {
      todoSearch = todoStore.filter((todo) =>
        todo.taskName.includes(search.current.value)
      );
    }

    setTodos(todoSearch);
  };
  const handleChangeSort = (event) => {
    let value = event.target.value;
    let arr = value.split("-");
    const sortDir = arr[0];
    const sortBy = arr[1];
    let sortTodos = [];
    if (sortDir == "name") {
      //Sắp xếp theo tên sinh viên
      if (sortBy == "ASC") {
        sortTodos = todos.sort((a, b) =>
          a.taskName > b.taskName ? 1 : a.taskName < b.taskName ? -1 : 0
        );
      } else {
        sortTodos = todos.sort((a, b) =>
          a.taskName > b.taskName ? -1 : a.taskName < b.taskName ? 1 : 0
        );
      }
    } else {
      if (sortBy == "ASC") {
        sortTodos = todos.sort((a, b) => a.taskLevel - b.taskLevel);
      } else {
        sortTodos = todos.sort((a, b) => b.taskLevel - a.taskLevel);
      }
    }

    setTodos([...sortTodos]);
  };

  return (
    <>
      {/* CONTROL (SEARCH + SORT + ADD) : START */}
      <div className="row">
        {/* SEARCH : START */}
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              ref={search}
              placeholder="Search for..."
            />
            <span className="input-group-btn">
              <button
                className="btn btn-info"
                type="button"
                onClick={hanldeSearch}
              >
                Go!
              </button>
            </span>
          </div>
        </div>
        {/* SEARCH : END */}
        {/* SORT : START */}
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <select className="form-control" onChange={handleChangeSort}>
            <option value="">Chọn sắp xếp</option>
            <option value="name-ASC">Name ASC</option>
            <option value="name-DESC">Name DESC</option>
            <option value="level-ASC">Level ASC</option>
            <option value="level-DESC">Level DESC</option>
          </select>
        </div>
        {/* SORT : END */}
        {/* ADD : START */}
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
          <button type="button" className="btn btn-info btn-block">
            Add Task
          </button>
        </div>
        {/* ADD : END */}
      </div>
      {/* CONTROL (SEARCH + SORT + ADD) : END */}
    </>
  );
}
