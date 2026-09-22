import { useState } from "react";

function TodoList() { 
    const [currentTodo, setCurrentTodo] = useState('');

    return (
        <div>
            <input
                value={currentTodo}
                onChange={(e) => setCurrentTodo(e.target.value)}
                type="text"
                name="todo"
                placeholder="Enter your todo"
            />
            <button>Add Todo</button>
        </div>
    );
}

export default TodoList;
