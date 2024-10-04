import Filter from "./components/container/filter";
import Header from "./components/container/header";
import TaskList from "./components/container/task-list";
import CreateTask from "./components/createTask";
import Footer from "./components/footer";
import TitleH2 from "./components/title-h2";
const App = (): JSX.Element => {
  return (
    <>
      <article className="bg-shadow">
        <Header />
        <main className="default-size main">
          <article>
            <TitleH2 title="Create task" />
            <CreateTask />
          </article>
          <article>
            <TitleH2 title="Filter" />
            <Filter />
          </article>
          <article>
            <TitleH2 title="List of tasks" />
            <TaskList />
          </article>
        </main>
        <Footer />
      </article>
    </>
  );
};

export default App;
