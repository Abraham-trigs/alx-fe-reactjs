import React, { useState } from "react";

const TodoList = () => {
    // Initialize state with some demo todos
    const [todos, setTodos] = useState([
        { id: 1, text: "Learn React", completed: false },
        { id: 2, text: "Build a Todo App", completed: false }
    ]);
    
    // Function to add a new todo
    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodo]);
    };
    
    // Function to toggle todo completion
    const toggleTodo = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };
    
    // Function to delete a todo
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    
    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.map(todo => (
                    <li 
                        key={todo.id} 
                        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                        onClick={() => toggleTodo(todo.id)}
                    >
                        {todo.text}
                        <button onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id); }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
