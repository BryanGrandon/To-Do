interface ITodo {
  id: number;
  task: string;
  status: boolean;
  category: string;
}

interface IUpdate extends ITodo {
  type: string;
}

type UpdateTodo = (data: IUpdate) => void;

interface ISearch {
  type: string;
  search?: string;
  category?: string;
  completed?: string;
}

type Search = (data: ISearch) => void;

type TodoContextType = {
  todos: ITodo[];
  categoryData: string[];
  saveTodo: (task: string, category: string) => void;
  updateTodo: UpdateTodo;
  search: Search;
};

export { ITodo, TodoContextType, ISearch, IUpdate };
