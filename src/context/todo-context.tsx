import React from "react";
import { ITodo, TodoContextType } from "../types/todo";

const TodoContext = React.createContext<TodoContextType | null>(null);

// Hook

export const useTodoContext = () => {
  return React.useContext(TodoContext);
};

type ProviderProps = {
  children: React.ReactNode;
};

export const TodoContextProvider = ({ children }: ProviderProps) => {
  const [todos] = React.useState<ITodo[]>([
    { id: 1, task: "Task 1", status: false, category: ["work"] },
  ]);

  const saveTodo = () => {};

  const updateTodo = () => {};

  return (
    <TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
