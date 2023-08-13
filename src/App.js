import css from "./App.module.css";
import AddBtn from "./components/Buttonts/AddBtn/AddBtn";
import MainBtn from "./components/Buttonts/MainBtn/MainBtn";
import StreamersList from "./components/StreamersList/StreamersList";
function App() {
  return (
    <>
      <div className={css.container}>
        <div className={css.app}>
          <header className={css.header}>
            <MainBtn />
            <AddBtn />
          </header>
          <main className={css.main}>
            <h1 className={css.tittle}>Recently Streamers</h1>
            <StreamersList />
          </main>
          <footer className={css.footer}></footer>
        </div>
      </div>
    </>
  );
}

export default App;
