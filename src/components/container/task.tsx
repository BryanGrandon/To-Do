import React from "react";
import { useTodoContext } from "../../context/todo-context";
import ButtonMain from "../buttonMain";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { IoClose } from "react-icons/io5";

type Props = {
  id: number;
  task: string;
  category: string;
  status: boolean;
};

const Task = (props: Props) => {
  let { updateTodo } = useTodoContext();
  let [isEdit, setIsEdit] = React.useState<boolean>(false);
  let [isChecked, setIsChecked] = React.useState<boolean>(props.status);

  let [task, setTask] = React.useState<string>(props.task);
  let [category, setCategory] = React.useState<string>(props.category);

  const handlerSubmitEdit = (): void => {
    updateTodo({
      id: props.id,
      type: "edit",
      task,
      category,
      status: isChecked,
    });
    setIsEdit(false);
  };
  const handlerCLickClose = (): void => {
    updateTodo({
      id: props.id,
      type: "delete",
      task,
      category,
      status: isChecked,
    });
  };
  const handlerClickCheck = (): void => {
    updateTodo({
      id: props.id,
      type: "checked",
      task,
      category,
      status: !isChecked,
    });
    setIsChecked(!isChecked);
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
          <input
            className="form-edit__input"
            placeholder="Task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <section className="task__df-row">
            <input
              className="form-edit__input form-edit__category"
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
              onClick={handlerClickCheck}
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
