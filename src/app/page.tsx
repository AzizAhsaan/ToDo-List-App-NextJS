'use client'
import Image from "next/image";
import { useState } from "react";
interface Todo {
  id:number;
  name: string;
  isDone : boolean;
}

export default function Home() {
    const [todoName, setTodoName] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);

    const addtodofunction =() => {
      const newTodo = {
        id:Math.random(),
        name:todoName,
        isDone:false
      }
      setTodos([...todos,newTodo])
    }

    const deletetodo =(id:number) => {
      const newTodos = todos.filter((todo) => todo.id !== id)
      setTodos(newTodos)

    }
    const editisDone = (id:number) => {
      const newTodos = todos.map((todo) => {
        if(todo.id === id){
          return {
            ...todo,
            isDone:!todo.isDone
          }
        }else{
          return {
            ...todo,
          }
        }
      })
      setTodos(newTodos)
    }


  console.log(todos)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="bg-white min-h-[500px] flex flex-col w-[900px] rounded-xl">

      <h1>To do list</h1>
      <input type="text" className="bg-black text-white" onChange={(e) =>  setTodoName(e.target.value)} />
      <button onClick={addtodofunction} className="">Add new todo</button>
      <div className="flex flex-col items-center w-full">
      <div className="w-full flex flex-row items-center justify-between p-2 bg-gray-800">
        <h1>Tasks</h1>
        <h1>Actions</h1>
      </div>
      <div className="grid grid-cols-1 gap-1 w-full ">
        {todos.map((todo,index) => (
          <div className="flex bg-black w-full flex-row items-center justify-between h-[150px]">
            <div className="flex flex-row items-center">
            <div className={`${todo.isDone === true ? "bg-blue-300" : "bg-red-300"} w-6 h-6 rounded-full` }></div>
            <h1>{todo.name}</h1>
            </div>
            <div className="flex flex-row items-center gap-4">
              <button onClick={() => editisDone(todo.id)}>edit</button>
              <button onClick={() => deletetodo(todo.id)}>delete</button>
            </div>


          </div>
        ))}
      </div>
    </div>
    </div>

    </main>
  );
}
