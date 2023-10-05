import css from "./StreamerCard.module.css";
import { useState } from "react";

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
    <li id={id} className={css.card}>
      <div className={css.main_group}>
        <div className={css.picture}></div>
        <h3 className={css.name}>{name}</h3>
      </div>
      {/* <div className={css.description_group}>
        <p className={css.platform}>{platform}</p>
        <p className={css.description}>{description}</p>
      </div> */}
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
    </li>
  );
}

export default StreamerCard;
