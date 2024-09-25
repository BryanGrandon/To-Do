import React from "react";
import { ITodo, TodoContextType } from "../types/todo";

const TodoContext = React.createContext<TodoContextType | null>(null);

// Hook

export const useTodoContext = () => {
  return React.useContext(TodoContext) as TodoContextType;
};

type ProviderProps = {
  children: React.ReactNode;
};

export const TodoContextProvider = ({ children }: ProviderProps) => {
  const [todos, setTodos] = React.useState<ITodo[]>([
    { id: 1, task: "Task 1", status: false, category: ["work"] },
  ]);

  const saveTodo = (task: string, category: string): void => {
    const newTodo: ITodo = {
      id: Math.floor(Math.random() * 100),
      task,
      category: [category],
      status: false,
    };
    setTodos([...todos, newTodo]);
  };
  console.log(todos);

  const updateTodo = () => {};

  return (
    <TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
