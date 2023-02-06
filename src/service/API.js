import axios from "axios"; 
import { BASE_URL_TODOLIST } from "../constants/constants"; 

const url = BASE_URL_TODOLIST;

export const  getDataTodos = async (id) => {
    id = id || "";
    return await axios.get (`${url}/${id}`);
};
export const  addDataTodos = async (todo) => {
    return await axios.post (url, todo);
};

export const  editDataTodos = async (id, todo) => {
    return await axios.put (`${url}/${id}`, todo);
};

export const  deleteDataTodos = async (id) => {
    return await axios.delete (`${url}/${id}`);
};
