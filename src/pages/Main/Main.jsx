import data from "../../streamers.json";
import css from "./Main.module.css";
import StreamersList from "../../components/StreamersList/StreamersList";
function Main() {
  return (
    <>
      <div className={css.container}>
        <div className={css.main}>
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
      </div>
    </>
  );
}

export default Main;
