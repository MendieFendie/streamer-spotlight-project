import { useState } from "react";
import data from "./streamers.json";
import css from "./App.module.css";
import AddBtn from "./components/Buttons/AddBtn/AddBtn";
import MainBtn from "./components/Buttons/MainBtn/MainBtn";
import Modal from "./components/Modal/Modal";
import StreamersList from "./components/StreamersList/StreamersList";
function App() {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <div className={css.container}>
        <div className={css.app}>
          <header className={css.header}>
            <MainBtn />
            <AddBtn openModalHandler={openModalHandler} />
          </header>
          <main className={css.main}>
            <h2 className={css.tittle}>
              Are you a fan of streamers? Do you love watching content on
              platforms like Twitch, YouTube, TikTok, Kick, or Rumble? Our
              Streamer Spotlight Application is designed just for you! With this
              application, you can discover and showcase your favorite streamers
              while interacting with other users in real-time.
            </h2>
            <StreamersList data={data} />
          </main>
          <footer className={css.footer}></footer>
        </div>
        {openModal && <Modal openModalHandler={openModalHandler} />}
      </div>
    </>
  );
}

export default App;
