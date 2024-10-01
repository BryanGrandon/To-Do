import React from "react";
import { useTodoContext } from "../context/todo-context";

const CreateTask = () => {
  let { saveTodo } = useTodoContext();
  let [task, setTask] = React.useState<string>("");
  let [category, setCategory] = React.useState<string>("");
  let [listCategory, setListCategory] = React.useState<string[]>([]);

  const createOptionDatalist = (value: string): void => {
    setListCategory([...listCategory, value]);
    const $dataList = document.getElementById("datalist-task");
    const $option: HTMLOptionElement = document.createElement("option");
    $option.setAttribute("value", value);
    $dataList?.appendChild($option);
  };

  const handlerClick = (): void => {
    if (!listCategory.includes(typeof category == "string" ? category : "")) {
      createOptionDatalist(String(category?.trim().toLowerCase()));
    }
    saveTodo(task, category);
    setTask("");
    setCategory("");
  };

  return (
    <article>
      <form
        className="form-create-task"
        id="form-create"
        onSubmit={(e) => {
          e.preventDefault();
          handlerClick();
        }}
      >
        <label className="form-create-task__label">
          Task:
          <input
            className="form-create-task__input"
            type="text"
            required
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </label>

        <label className="form-create-task__label">
          Category:
          <input
            className="form-create-task__input"
            type="text"
            list="datalist-task"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>

        <button className="form-create-task__btn">Add task</button>
      </form>
      <datalist id="datalist-task"></datalist>
    </article>
  );
};

export default CreateTask;
