import React from "react";
import { ITodo, TodoContextType, ISearch, IUpdate } from "../types/todo";

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

  // Update To-Do

  type EditTask = (id: number, task: string, category: string) => void;

  const editTask: EditTask = (id, task, category): void => {
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

  const deleteTask = (id: number): void => {
    let result = todos.filter((e) => e.id != id);
    for (let i = 0; i < result.length; i++) result[i].id = i + 1;
    setTodos([...result]);
    setSaved([...result]);
  };

  const [textComplete, setTextComplete] = React.useState<string>("both");

  const checkedTask = (id: number, status: boolean): void => {
    saved.filter((e) => {
      if (e.id == id) e.status = status;
    });
    search({ type: "complete", completed: textComplete });
  };

  const updateTodo = ({ id, type, task, category, status }: IUpdate): void => {
    if (type == "edit") editTask(id, task, category);
    else if (type == "delete") deleteTask(id);
    else if (type == "checked") checkedTask(id, status);
  };

  // Search

  const searchText = (search: string): void => {
    if (search) {
      let result = saved.filter((e) => e.task.includes(search.toLowerCase()));
      setTodos([...result]);
    } else setTodos(saved);
  };

  const searchCategory = (category: string): void => {
    if (category != "all") {
      let result = saved.filter((e) => e.category == category);
      setTodos([...result]);
    } else setTodos(saved);
  };

  const searchChecked = (completed: string): void => {
    setTextComplete(String(completed));
    if (completed != "both") {
      let isComplete: boolean = completed == "complete" ? true : false;
      let result = saved.filter((e) => e.status == isComplete);
      setTodos([...result]);
    } else setTodos(saved);
  };

  const search = ({ type, search, category, completed }: ISearch): void => {
    if (type == "search") searchText(String(search));
    else if (type == "category") searchCategory(String(category));
    else if (type == "complete") searchChecked(String(completed));
  };

  return (
    <TodoContext.Provider
      value={{ todos, saveTodo, updateTodo, search, categoryData }}
    >
      {children}
    </TodoContext.Provider>
  );
};
