// src/redux/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name : "todos",
    initialState : [],
    reducers : {
        addTodo:(state,action)=>{
            // console.log("anil state",state)
            state.push({
                id:Date.now(),
                text:action.payload,
               
            })
        },
        deleteTodo:(state,action)=>{
            

            return state.filter(todo => todo.id !== action.payload)

        },
        saveEditTodo:(state,action)=>{
            const {id, text}= action.payload;
            console.log("id and text is", id)
            const todo = state.find(todo => todo.id === id);
            // console.log("editing todo is",todo)
            if (todo){
                todo.text = text
            }
        },
       

    }
});

export const {addTodo, deleteTodo, saveEditTodo} = todoSlice.actions;
export default todoSlice.reducer;