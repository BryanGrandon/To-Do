import React from "react";
import { useTodoContext } from "../../context/todo-context";
import ButtonMain from "../buttonMain";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

type Props = {
  id: number;
  task: string;
  category: string;
};

const Task = (props: Props) => {
  let { updateTodo } = useTodoContext();
  let [isEdit, setIsEdit] = React.useState<boolean>(false);
  let [isChecked, setIsChecked] = React.useState<boolean>(false);

  let [task, setTask] = React.useState<string>(props.task);
  let [category, setCategory] = React.useState<string>(props.category);

  const handlerSubmitEdit = () => {
    updateTodo(props.id, "edit", task, category);
    setIsEdit(false);
  };

  return (
    <section className={`task ${isChecked ? "completed__form" : ""}`}>
      {isEdit ? (
        <form
          className="form-edit"
          onSubmit={(e) => {
            e.preventDefault();
            handlerSubmitEdit();
          }}
        >
          <textarea
            className="form-edit__input form-edit__task"
            placeholder="Task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          ></textarea>
          <section className="task__df-row">
            <input
              className="form-edit__input form-edit__category"
              type="text"
              placeholder="Category..."
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <ButtonMain title="Update" />
          </section>
        </form>
      ) : (
        <>
          <section
            className={`task__section ${isChecked ? "completed__task" : ""}`}
          >
            <section
              onClick={() => setIsChecked(!isChecked)}
              className="task__section-icons"
            >
              {isChecked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            </section>
            <p>{props.task}</p>
          </section>
          <section className="task__df-row">
            <p className={isChecked ? "completed__category" : ""}>
              {props.category}
            </p>
            <ButtonMain title="Edit" onClick={() => setIsEdit(true)} />
          </section>
        </>
      )}
    </section>
  );
};

export default Task;
