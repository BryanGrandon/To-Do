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

type TodoContextType = {
  todos: ITodo[];
  saveTodo: (task, category) => void;
  updateTodo: UpdateTodo;
};

export { ITodo, TodoContextType, UpdateTodo };
