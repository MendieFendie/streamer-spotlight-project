import css from "./StreamerCard.module.css";

function StreamerCard(props) {
  const { id, name, platform, description, upvotes, downvotes } = props;
  return (
    <li id={id} className={css.card}>
      <h3>{name}</h3>
      <p>{platform}</p>
      <p>{description}</p>
      <p>{upvotes}</p>
      <p>{downvotes}</p>
    </li>
  );
}

export default StreamerCard;
