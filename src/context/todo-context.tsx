import React from "react";
import { ITodo, TodoContextType, UpdateTodo } from "../types/todo";

const TodoContext = React.createContext<TodoContextType | null>(null);

// Hook

export const useTodoContext = () => {
  return React.useContext(TodoContext) as TodoContextType;
};

type ProviderProps = {
  children: React.ReactNode;
};

export const TodoContextProvider = ({ children }: ProviderProps) => {
  const [todos, setTodos] = React.useState<ITodo[]>([]);

  const saveTodo = (task: string, category: string): void => {
    const newTodo: ITodo = {
      id: todos.length + 1,
      task,
      category,
      status: false,
    };
    setTodos([...todos, newTodo]);
  };

  type EditTask = (id: number, task: string, category: string) => void;

  const editTask: EditTask = (id, task, category) => {
    todos.map((e) => {
      if (e.id == id) {
        e.task = task;
        e.category = category;
        setTodos([...todos]);
      }
    });
  };

  const deleteTask = (id: number) => {
    let result = todos.filter((e) => e.id != id);
    for (let i = 0; i < result.length; i++) result[i].id = i + 1;
    setTodos([...result]);
  };

  const updateTodo: UpdateTodo = (id, type, task, category) => {
    if (type == "edit") editTask(id, task, category);
    else if (type == "delete") deleteTask(id);
  };

  return (
    <TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
