import css from "./StreamerCard.module.css";

function StreamerCard(props) {
  const { id, name, platform, description, upvotes, downvotes } = props;
  return (
    <li id={id} className={css.card}>
      <div className={css.main_group}>
        <div className={css.picture}></div>
        <h3 className={css.name}>{name}</h3>
      </div>
      <div className={css.description_group}>
        <p className={css.platform}>{platform}</p>
        <p className={css.description}>{description}</p>
      </div>
      <div className={css.upvotes_group}>
        <button className={css.upvotes_btn}>
          <p className={css.upvotes}>{upvotes}</p>
        </button>
        <button className={css.downvotes_btn}>
          <p className={css.downvotes}>{downvotes}</p>
        </button>
      </div>
    </li>
  );
}

export default StreamerCard;
