import React from "react";
import { useTodoContext } from "../../context/todo-context";
import Dropdown from "../dropdown";

const Filter = () => {
  const { search, categoryData } = useTodoContext();
  const [categoryActive, setCategoryActive] = React.useState<string>("all");

  type CategoriesT = {
    text: string;
    id: number;
  };

  const categories: CategoriesT[] = [
    {
      text: "all",
      id: 0,
    },
  ];

  for (let i = 0; i < categoryData.length; i++) {
    const newCategory: CategoriesT = {
      text: categoryData[i],
      id: categories.length,
    };
    categories.push(newCategory);
  }

  const handlerClickCategories = (text: string) => {
    console.log(text);
    setCategoryActive(text);
    search({ type: "category", category: text });
  };

  return (
    <article className="filter">
      <input
        type="text"
        className="filter__input"
        placeholder="Search Task..."
        onChange={(e) => search({ type: "search", search: e.target.value })}
      />
      <Dropdown
        title="category"
        active={categoryActive}
        children={categories.map((e) => (
          <p
            className="dropdown__element-list-e"
            key={e.id}
            onClick={() => handlerClickCategories(e.text)}
          >
            {e.text}
          </p>
        ))}
      />
      <Dropdown
        title="Status"
        active={categoryActive}
        children={categories.map((e) => (
          <p
            className="dropdown__element-list-e"
            key={e.id}
            onClick={() => handlerClickCategories(e.text)}
          >
            {e.text}
          </p>
        ))}
      />
    </article>
  );
};

export default Filter;
