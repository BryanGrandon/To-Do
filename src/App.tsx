import Filter from "./components/container/filter";
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

          <Filter />

          <TaskList />
        </main>
      </article>
    </>
  );
};

export default App;
