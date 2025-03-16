import React from "react";
import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
    test("renders TodoList component correctly", () => {
        render(<TodoList />);
        const heading = screen.getByText(/Todo List/i);
        expect(heading).toBeInTheDocument();
    });
});
