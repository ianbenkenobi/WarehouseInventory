import '../App.css';
import { db } from '../firebase-config';
import { uid } from "uid";
import { set, ref, onValue, remove, update } from "firebase/database";
import { useState, useEffect } from "react";
import Home from './Home'
import { Route, link, Router } from 'react-router-dom';
import NavBar from '../NavBar';


export default function Warehouse() {
  const [todo, setTodo] = useState(""); // crear variable
  const [todos, setTodos] = useState([]); //crear array 
  const [isEdit, setisEdit] = useState(false); //crear array 
  const [tempUuid, setTempUuid] = useState("");

  const handleTodoChange = (e) => {
    setTodo(e.target.value);//funcion para insertar data a la base de datos 
  }

  //write
  const writetoDB = () => {
    const uuid = uid()// para crear id unico y usarlo luego como llave para borrar
    set(ref(db, `/inventory/parts/${uuid}`), {

      partID: todo,
      uuid: uuid,

    });
    setTodo("");
  };

  //read
  useEffect(() => {
    onValue(ref(db), snapshot => {
      setTodos([]);
      const data = snapshot.val();
      if (data !== null)//validar si la base de datos esta vacia
      {
        Object.values(data).map(todo => {

          setTodos((oldArray => [...oldArray, todo]));

        })
      }
    });
  })

  //update

  const handleUpdate = (todo) => {
    setisEdit(true);
    setTempUuid(todo.uuid);
    setTodo(todo.todo)
  }
  const handleSubmitChange = () => {
    update(ref(db, `/${tempUuid}`), {
      todo,
      uuid: tempUuid,

    });
    setTodo("");
    setisEdit(false);
  };


  //delete
  const handleTodoDelete = (todo) => {
    remove(ref(db, `/${todo.uuid}`))
  }

  //search
  return (
    <div className="App">


      <input type="text" value={todo} onChange={handleTodoChange} />

      {isEdit ? (
        <>
          <button onClick={handleSubmitChange}>Submit Change</button>
          <button onClick={() => {
            setisEdit(false)
            setTodo("")
          }}>x</button>
        </>
      ) : (

        <button onClick={writetoDB}>Submit</button>

      )

      }

      {todos.map((todo) => (
        <>
          <h1>{todo.todo}</h1>
          <button onClick={() => handleUpdate(todo)}>update</button>
          <button onClick={() => handleTodoDelete(todo)}>delete</button>
        </>
      ))
      }
    </div>
  );
}


