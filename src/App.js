import React from "react"
import {useState, useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import {addTodo, deleteTodo, saveEditTodo} from "./redux/todoSlice"
const App = () => {
  const [newTodo, setNewtodo] = useState("")
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState("")
  
  const [filteredTodos, setFilteredTodos] = useState([])
    // console.log(filteredTodos)  
  const todos = useSelector((state)=> state.todos)
  console.log(todos)
  
  const dispatch = useDispatch()
  const handleAdd = ()=>{
    if (newTodo){
      dispatch(addTodo(newTodo))
      setNewtodo("")

    }
  }

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }

  const handleEdit = (id)=>{
    setEditingId(id)
    const todo = todos.find((todo)=>todo.id === id)
    setEditText(todo?.text || "")
   

  }

  const handleSaveEdit = ()=>{
   if (editText){
    dispatch(saveEditTodo({id:editingId,text:editText}))
    setEditingId(null)
   }
  }

  const handleCancelEdit = ()=>{
    setEditingId(null)
  //  return {...todos}
   }

// useEffect(){
//   <div>
//     {(todos.length > 0) && "No todos" }
//     </div>
//    }

useEffect(()=>{
  const filtered = todos.filter((todo)=>
    todo.text.toLowerCase().includes(newTodo.toLowerCase())
  );
  setFilteredTodos(filtered)
},[newTodo, todos])

  return (
    <>
    <div className = "text-center">
    <h1 className = "font-bold">Todo Project</h1>
    <input className = "border" type = "text" value = {newTodo} onChange = {(e)=>setNewtodo(e.target.value)} placeholder="Search for todos" ></input>
    <button className = "bg-blue-500 text-white p-3 m-3 rounded-lg" onClick = {handleAdd}>add todo</button>
   
   {editingId ? 
   <div>
    <input type = "text" value = {editText} onChange = {(e)=> setEditText(e.target.value)} className = "border rounded-lg p-2"></input>
    <button onClick = {handleSaveEdit} className = "bg-green-400 border text-white p-2 mx-3 rounded-lg">save Edit</button>
    <button onClick = {handleCancelEdit} className = "bg-pink-400 border text-white p-2 mx-3 rounded-lg">cancel Edit</button>
   </div>
   :

   <div>

   <ul>
     
   {
   filteredTodos.map((todo)=>(
     <li key = {todo.id}>{todo.text}  <button className ="bg-yellow-400 text-white border p-2 mx-3 rounded-lg my-3" onClick={()=>handleEdit(todo.id)}>Edit</button>  
     <button className ="bg-red-500 text-white border p-2 mx-3 rounded-lg" onClick = {()=>handleDelete(todo.id)}>Delete</button></li>
    
   ))}
   </ul>
   {todos.length ===0 && <p className = "font-extrabold text-lg">No todos here</p>}
   
   </div>
   }
  






    </div>
    </>
  );
}

export default App;
