import Header from "./components/container/header";
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

          <article>
            <h2>Tasks</h2>
          </article>
        </main>
      </article>
    </>
  );
};

export default App;
