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
  const getLocalStorage = (string: string) => {
    return JSON.parse(String(localStorage.getItem(string)));
  };

  let list = getLocalStorage("info");

  const [todos, setTodos] = React.useState<ITodo[]>(
    list != null && list.length > 0 ? list : []
  );
  const [saved, setSaved] = React.useState<ITodo[]>(
    list != null && list.length > 0 ? list : []
  );
  const [categoryData, setCategoryData] = React.useState<string[]>([]);

  React.useEffect(() => {
    updateCategory(todos);
  }, []);

  const updateCategory = (list: ITodo[]) => {
    let mySet = new Set<string>();
    list.map((e) => mySet.add(e.category));
    setCategoryData([...mySet]);
  };

  const saveTodo = (task: string, category: string): void => {
    const newTodo: ITodo = {
      id: todos.length + 1,
      task,
      category: category.toLowerCase(),
      status: false,
    };
    setSaved([...todos, newTodo]);
    setTodos([...todos, newTodo]);
    updateCategory([...todos, newTodo]);

    localStorage.setItem("info", JSON.stringify([...todos, newTodo]));
  };

  // Update To-Do

  type EditTask = (id: number, task: string, category: string) => void;

  const editTask: EditTask = (id, task, category): void => {
    todos.map((e) => {
      if (e.id == id) {
        e.task = task;
        e.category = category.toLowerCase();
        setTodos([...todos]);
        setSaved([...todos]);
        updateCategory([...todos]);
        localStorage.setItem("info", JSON.stringify([...todos]));
      }
    });
  };

  const deleteTask = (id: number): void => {
    let result = todos.filter((e) => e.id != id);
    for (let i = 0; i < result.length; i++) result[i].id = i + 1;
    setTodos([...result]);
    setSaved([...result]);
    updateCategory([...result]);
    localStorage.setItem("info", JSON.stringify([...result]));
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
    if (search != "") {
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
