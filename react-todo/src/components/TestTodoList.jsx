import React from "react";
import TodoList from "./TodoList";

// A wrapper component for testing
const TestTodoList = () => {
    return (
        <div data-testid="test-container">
            <TodoList />
        </div>
    );
};

export default TestTodoList;
