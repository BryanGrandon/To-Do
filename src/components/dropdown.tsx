import React, { ReactNode } from "react";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";

type Props = {
  title: string;
  children: ReactNode;
  active: string;
};

const Dropdown = ({ title, children, active }: Props): JSX.Element => {
  const [isActive, setIsActive] = React.useState<boolean>(false);

  return (
    <article className="dropdown">
      <section
        className="dropdown__category"
        onClick={() => setIsActive(!isActive)}
      >
        <p>
          {title} <span className="dropdown__category-select">{active}</span>
        </p>
        {isActive ? (
          <IoIosArrowDown className="dropdown__category-icon" />
        ) : (
          <IoIosArrowBack className="dropdown__category-icon" />
        )}
      </section>
      <section className="dropdown__element">
        {isActive ? (
          <section
            className="dropdown__element-list"
            onClick={() => setIsActive(!isActive)}
          >
            {children}
          </section>
        ) : null}
      </section>
    </article>
  );
};

export default Dropdown;
