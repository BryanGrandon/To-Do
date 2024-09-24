interface ITodo {
  id: number;
  task: string;
  status: boolean;
  category: string[];
}

type TodoContextType = {
  todos: ITodo[];
  saveTodo: (todo: ITodo) => void;
  updateTodo: (id: number) => void;
};

export { ITodo, TodoContextType };
