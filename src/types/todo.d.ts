interface ITodo {
  id: number;
  task: string;
  status: boolean;
  category: string;
}

type TodoContextType = {
  todos: ITodo[];
  saveTodo: (task, category) => void;
  updateTodo: (
    id: number,
    type: string,
    task: string,
    category: string
  ) => void;
};

export { ITodo, TodoContextType };
