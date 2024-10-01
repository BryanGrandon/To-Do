import React from "react";
import { ITodo, TodoContextType, UpdateTodo, ISearch } from "../types/todo";

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
  const [saved, setSaved] = React.useState<ITodo[]>([]);
  const [categoryData, setCategoryData] = React.useState<string[]>([]);

  const updateCategory = (data: string) => {
    if (!categoryData.includes(data)) {
      setCategoryData([...categoryData, data]);
    }
  };

  const saveTodo = (task: string, category: string): void => {
    const newTodo: ITodo = {
      id: todos.length + 1,
      task,
      category: category.toLowerCase(),
      status: false,
    };
    updateCategory(category.toLowerCase());
    setSaved([...todos, newTodo]);
    setTodos([...todos, newTodo]);
  };

  type EditTask = (id: number, task: string, category: string) => void;

  const editTask: EditTask = (id, task, category) => {
    todos.map((e) => {
      if (e.id == id) {
        e.task = task;
        e.category = category.toLowerCase();
        updateCategory(category.toLowerCase());
        setTodos([...todos]);
        setSaved([...todos]);
      }
    });
  };

  const deleteTask = (id: number) => {
    let result = todos.filter((e) => e.id != id);
    for (let i = 0; i < result.length; i++) result[i].id = i + 1;
    setTodos([...result]);
    setSaved([...todos]);
  };

  const updateTodo: UpdateTodo = (id, type, task, category) => {
    if (type == "edit") editTask(id, task, category);
    else if (type == "delete") deleteTask(id);
  };

  const search = ({ type, search, category, completed }: ISearch): void => {
    if (type == "search") {
      if (search) {
        let result = todos.filter((e) =>
          e.task.toLowerCase().includes(search.toLowerCase())
        );
        setTodos([...result]);
      } else setTodos(saved);
    } else if (type == "category") {
      if (category != "all") {
        let result = saved.filter((e) => e.category == category);
        setTodos([...result]);
      } else setTodos(saved);
    } else if (type == "complete") {
      let result = saved.filter((e) => e.status == completed);
      setTodos([...result]);
    }
  };

  return (
    <TodoContext.Provider
      value={{ todos, saveTodo, updateTodo, search, categoryData }}
    >
      {children}
    </TodoContext.Provider>
  );
};
