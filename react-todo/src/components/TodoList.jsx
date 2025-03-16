import React, { useState } from "react";

const TodoList = () => {
    // Initialize with some demo todos
    const [todos, setTodos] = useState([
        { id: 1, text: "Learn React", completed: false },
        { id: 2, text: "Practice Testing", completed: false }
    ]);

    // Function to add a new todo
    const addTodo = (todoText) => {
        setTodos([...todos, { id: Date.now(), text: todoText, completed: false }]);
    };

    // Function to toggle todo completion
    const toggleTodo = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    //  Function to delete a todo
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} 
                        onClick={() => toggleTodo(todo.id)}
                        style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                        {todo.text}
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
