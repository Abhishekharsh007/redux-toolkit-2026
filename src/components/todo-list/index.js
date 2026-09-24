import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../../store/slice/todoSlice";

function TodoList() { 
    const [currentTodo, setCurrentTodo] = useState('');
    const [currentEditedTodoID, setCurrentEditedTodoId] = useState(null);

    const dispatch = useDispatch();
    // const extractUpdatedStateFromReduxStore = useSelector(state => state);
    const { todoList } = useSelector(state => state.todo);

    // console.log(extractUpdatedStateFromReduxStore);

    function handleAddTodo() { 
        dispatch(addTodo(currentTodo));
        setCurrentTodo('');
    }

    function handleDeleteTodo(getCurrentTodoID) { 
        dispatch(deleteTodo(getCurrentTodoID));
    }

    function handleChangeTodo(getCurrentTodo) {
        setCurrentEditedTodoId(getCurrentTodo.id);
        setCurrentTodo(getCurrentTodo.title);
    }

    function handleUpdateTodo() {
        dispatch(updateTodo({ currentEditedTodoID, currentTodo }));
        setCurrentTodo('');
        setCurrentEditedTodoId(null);
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
            <button
                disabled={currentTodo === ""}
                onClick={ currentEditedTodoID === null ? handleAddTodo : handleUpdateTodo}
            >
                { 
                    currentEditedTodoID !== null ? 'Update Todo' : 'Add Todo'
                }
            </button>
            <ul>
                {todoList && todoList.length > 0 ? todoList.map(
                    (todoItem) => (
                        <li key={todoItem.id}>
                            <p>
                                {todoItem.title}
                            </p>
                            <button onClick={() => handleDeleteTodo(todoItem.id)}>
                                Delete
                            </button>
                            <button onClick={() => handleChangeTodo(todoItem)}>
                                Update
                            </button>
                        </li>
                    )
                ) : null }
            </ul>
        </div>
    );
}

export default TodoList;
