import Header from "./components/container/header";

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <section>
          <h2>Create task</h2>
        </section>

        <section>
          <h2>Filter</h2>
        </section>

        <article>
          <h2>Tasks</h2>
        </article>
      </main>
    </>
  );
};

export default App;
