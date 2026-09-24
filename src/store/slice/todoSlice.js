import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todoList: [],
};

const todoReducer = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        // combine all the actions that you need
        addTodo(state, action) { 
            console.log(action);
            const newlyCreatedTodo = {
                id: state.todoList.length === 0 ? 1 : state.todoList.length + 1,
                title: action.payload,
            };    
            state.todoList.push(newlyCreatedTodo);
            return state;
        },
        deleteTodo(state, action) { 
            state.todoList = state.todoList.filter(
                todoItem => todoItem.id !== action.payload
            );
            return state;
        },
        updateTodo(state, action) { 
            console.log(action);
            
            let getTodos = state.todoList;
            const getCurrentTodoIndex = action.payload.currentEditedTodoID - 1;
            console.log(getCurrentTodoIndex);

            getTodos[getCurrentTodoIndex] = {
                ...getTodos[getCurrentTodoIndex],
                title: action.payload.currentTodo
            };
            state.todoList = getTodos;
            return state;
        }
    }
});

export const { addTodo, deleteTodo, updateTodo } = todoReducer.actions;

export default todoReducer.reducer;
