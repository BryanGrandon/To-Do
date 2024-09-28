import Header from "./components/container/header";
import TaskList from "./components/container/task-list";
import CreateTask from "./components/createTask";

const App = (): JSX.Element => {
  return (
    <>
      <article className="bg-shadow ">
        <Header />
        <main className="default-size ">
          <CreateTask />

          <section>
            <h2>Filter</h2>
          </section>

          <TaskList />
        </main>
      </article>
    </>
  );
};

export default App;
