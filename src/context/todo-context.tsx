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
    { id: 1, task: "Task 1", status: false, category: "work" },
  ]);

  const saveTodo = (task: string, category: string): void => {
    const newTodo: ITodo = {
      id: Math.floor(Math.random() * 1000),
      task,
      category,
      status: false,
    };
    setTodos([...todos, newTodo]);
  };
  console.log(todos);

  const updateTodo = (
    id: number,
    type: string,
    task: string,
    category: string
  ) => {
    if (type == "edit") {
      todos.map((e) => {
        if (e.id == id) {
          e.task = task;
          e.category = category;
          setTodos([...todos]);
        }
      });
    }

    // delete task
  };

  return (
    <TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
