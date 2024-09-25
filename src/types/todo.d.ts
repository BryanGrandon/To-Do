interface ITodo {
  id: number;
  task: string;
  status: boolean;
  category: string[];
}

type TodoContextType = {
  todos: ITodo[];
  saveTodo: (task, category) => void;
  updateTodo: (id: number) => void;
};

export { ITodo, TodoContextType };
