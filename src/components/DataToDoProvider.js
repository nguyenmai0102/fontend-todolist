import React, { createContext, useEffect, useState } from "react";
import { getDataTodos } from "../service/API";

export const DataContext = createContext();
export default function DataToDoProvider(props) {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    // const todoStore = JSON.parse(localStorage.getItem("todoStore"));
    // if (todoStore) setTodos(todoStore);
    getDataTodos().then((res)=>{
      setTodos(res.data)
    })
  }, []);

  const saveLocal = (data) => {
    localStorage.setItem("todoStore", JSON.stringify(data));
  };

  return (
    <DataContext.Provider value={[todos, setTodos, saveLocal]}>
      {props.children}
    </DataContext.Provider>
  );
}
