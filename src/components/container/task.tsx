import React from "react";
import { useTodoContext } from "../../context/todo-context";
import ButtonMain from "../buttonMain";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { IoClose } from "react-icons/io5";

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

  const handlerSubmitEdit = (): void => {
    updateTodo(props.id, "edit", task, category);
    setIsEdit(false);
  };
  const handlerCLickClose = () => {
    updateTodo(props.id, "delete", task, category);
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
            className="form-edit__input"
            placeholder="Task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            rows={1}
          ></textarea>
          <section className="task__df-row">
            <textarea
              className="form-edit__input form-edit__category"
              placeholder="Category..."
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              rows={1}
            ></textarea>
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
            <button className="task__btn-close" onClick={handlerCLickClose}>
              <IoClose />
            </button>
          </section>
        </>
      )}
    </section>
  );
};

export default Task;
