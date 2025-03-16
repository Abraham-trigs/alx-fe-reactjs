import React, { useState } from "react";

const TodoList = () => {
    // Initialize with some demo todos
    const [todos, setTodos] = useState([
        { id: 1, text: "Learn React", completed: false },
        { id: 2, text: "Practice Testing", completed: false }
    ]);
    const [newTodo, setNewTodo] = useState(""); // State for input field

    // Function to add a new todo
    const addTodo = () => {
        if (newTodo.trim() === "") return; // Prevent empty todos
        setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
        setNewTodo(""); // Clear input field
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
            {/* Input field and Add button */}
            <input 
                type="text" 
                placeholder="Add a new todo" 
                value={newTodo} 
                onChange={(e) => setNewTodo(e.target.value)} 
            />
            <button onClick={addTodo}>Add Todo</button>

            {/* Displaying todos */}
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
