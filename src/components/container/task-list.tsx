// import React from "react";
import { useTodoContext } from "../../context/todo-context";
import Task from "./task";

const TaskList = () => {
  const { todos } = useTodoContext();
  return (
    <article className="task-list">
      {todos.map((e) => (
        <Task key={e.id} id={e.id} task={e.task} category={e.category} />
      ))}
    </article>
  );
};

export default TaskList;
