import React, { useState } from "react";

const TodoList = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = (todoText) => {
		setTodos([...todos, { text: todoText, completed: false }]);
	};

	return (
		<div>
			<h2>Todo List</h2>
			<ul>
				{todos.map((todo, index) => (
						<li key={index}>{todo.text}</li>
					))}
			</ul>
		</div>
	);
};

export default TodoList;
