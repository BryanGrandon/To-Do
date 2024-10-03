import { IoLogoGithub } from "react-icons/io";

function Header(): JSX.Element {
  return (
    <header className="header default-size">
      <nav className="header__nav">
        <a href="#" target="__blank" className="header__btn-github">
          <IoLogoGithub />
          Github
        </a>
      </nav>
      <h1 className="header__title">To Do List</h1>
    </header>
  );
}

export default Header;
