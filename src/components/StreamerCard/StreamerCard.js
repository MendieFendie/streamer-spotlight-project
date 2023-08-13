import css from "./StreamerCard.module.css";

function StreamerCard(props) {
  const { id, name, platform, description, upvotes, downvotes } = props;
  return (
    <li id={id} className={css.card}>
      <div>
        <div className={css.picture}></div>
        <h3 className={css.name}>{name}</h3>
      </div>
      <div>
        <p className={css.platform}>{platform}</p>
        <p className={css.description}>{description}</p>
      </div>
      <div>
        <p className={css.upvotes}>{upvotes}</p>
        <p className={css.downvotes}>{downvotes}</p>
      </div>
    </li>
  );
}

export default StreamerCard;
