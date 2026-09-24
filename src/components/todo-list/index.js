import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../../store/slice/todoSlice";

function TodoList() { 
    const [currentTodo, setCurrentTodo] = useState('');

    const dispatch = useDispatch();
    // const extractUpdatedStateFromReduxStore = useSelector(state => state);
    const { todoList } = useSelector(state => state.todo);

    // console.log(extractUpdatedStateFromReduxStore);

    function handleAddTodo() { 
        dispatch(addTodo(currentTodo));
    }

    function handleDeleteTodo(getCurrentTodoID) { 
        dispatch(deleteTodo(getCurrentTodoID));
    }

    return (
        <div>
            <input
                value={currentTodo}
                onChange={(e) => setCurrentTodo(e.target.value)}
                type="text"
                name="todo"
                placeholder="Enter your todo"
            />
            <button disabled={currentTodo === ""} onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todoList && todoList.length > 0 ? todoList.map(
                    (todoItem) => (
                        <li key={todoItem.id}>
                            <p>
                                {todoItem.title}
                                <button onClick={() => handleDeleteTodo(todoItem.id)}>
                                    Delete
                                </button>
                            </p>
                        </li>
                    )
                ) : null }
            </ul>
        </div>
    );
}

export default TodoList;
