import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TestTodoList from "../components/TestTodoList";

describe("TodoList Component", () => {
    test("renders TodoList component correctly", () => {
        render(<TestTodoList />);
        const heading = screen.getByText(/Todo List/i);
        expect(heading).toBeInTheDocument();
    });

    test("adds a new todo", () => {
        render(<TestTodoList />);
        
        // Select input and button
        const input = screen.getByPlaceholderText(/Add a new todo/i);
        const addButton = screen.getByText(/Add Todo/i);

        // Simulate user typing and clicking "Add Todo"
        fireEvent.change(input, { target: { value: "Learn Testing" } });
        fireEvent.click(addButton);

        // Check if the new todo appears
        expect(screen.getByText(/Learn Testing/i)).toBeInTheDocument();
    });
});
