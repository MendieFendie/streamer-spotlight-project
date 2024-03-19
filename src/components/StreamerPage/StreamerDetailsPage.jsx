import css from "./StreamerDetailsPage.module.css";

function StreamerDetailsPage({ data }) {
  return (
    <div className={css.streamerDetails} id={data.id}>
      <div className={css.photoDiv}>
        <img className={css.photo} src={data.avatar} alt="avatar" />
        <h2 className={css.streamerNameLabel}>Streamer name:</h2>
        <p className={css.name}>{data.name}</p>
      </div>
      <div className={css.mainGroup}>
        <div className={css.upvotes}>
          <p>{data.upvotes}</p>
          <p>Upvotes</p>
        </div>
        <div className={css.platformDiv}>
          <h2 className={css.platformLabel}>Platform:</h2>
          <p className={css.platform}>{data.platform}</p>
        </div>
        <div className={css.downvotes}>
          <p>{data.downvotes}</p>
          <p>Downvotes</p>
        </div>
      </div>
      <div className={css.descriptionDiv}>
        <h2 className={css.descriptionLabel}>About me:</h2>
        <p className={css.description}>"{data.description}"</p>
      </div>
    </div>
  );
}

export default StreamerDetailsPage;
