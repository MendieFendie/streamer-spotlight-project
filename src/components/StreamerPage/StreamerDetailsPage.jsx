import css from "./StreamerDetailsPage.module.css";

function StreamerDetailsPage({ data }) {
  return (
    <div className={css.streamerDetails} id={data.id}>
      <div className={css.mainGroup}>
        <div className={css.platformDiv}>
          <h2 className={css.platformLabel}>Platform:</h2>
          <p className={css.platform}>{data.platform}</p>
        </div>
        <div className={css.photoDiv}>
          <img
            className={css.photo}
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png"
            alt=""
          />
          <h2 className={css.streamerNameLabel}>Streamer name:</h2>
          <p className={css.name}>{data.name}</p>
        </div>
        <div className={css.ranking_group}>
          <div className={css.upvotes}>
            <p>{data.upvotes}</p>
            <p>Upvotes</p>
          </div>
          <div className={css.downvotes}>
            <p>{data.downvotes}</p>
            <p>Downvotes</p>
          </div>
        </div>
      </div>
      <div className={css.descriptionDiv}>
        <h2 className={css.descriptionLabel}>About me:</h2>
        <p className={css.description}>{data.description}</p>
      </div>
    </div>
  );
}

export default StreamerDetailsPage;
