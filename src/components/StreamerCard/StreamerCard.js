import css from "./StreamerCard.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function StreamerCard(props) {
  const { id, name, upvotes, downvotes } = props;
  const [upvote, setUpvote] = useState(upvotes);
  const [downvote, setDownvote] = useState(downvotes);

  const upvotesCounter = () => {
    setUpvote(upvote + 1);
  };

  const downvotesCounter = () => {
    setDownvote(downvote + 1);
  };

  return (
    <div id={id} className={css.card}>
      <Link to={`${id}`} className={css.main_group}>
        <div className={css.picture}></div>
        <h3 className={css.name}>{name}</h3>
      </Link>
      <div className={css.upvotes_group}>
        <button
          className={css.upvotes_btn}
          onClick={() => {
            upvotesCounter();
          }}
        >
          <p className={css.upvotes}>{upvote}</p>
        </button>
        <button
          className={css.downvotes_btn}
          onClick={() => {
            downvotesCounter();
          }}
        >
          <p className={css.downvotes}>{downvote}</p>
        </button>
      </div>
    </div>
  );
}

export default StreamerCard;
