interface ITodo {
  id: number;
  task: string;
  status: boolean;
  category: string;
}

type UpdateTodo = (
  id: number,
  type: string,
  task: string,
  category: string
) => void;

interface ISearch {
  type: string;
  search?: string;
  category?: string;
  completed?: boolean;
}

type Search = (data: ISearch) => void;

type TodoContextType = {
  todos: ITodo[];
  categoryData: string[];
  saveTodo: (task: string, category: string) => void;
  updateTodo: UpdateTodo;
  search: Search;
};

export { ITodo, TodoContextType, UpdateTodo, ISearch };
