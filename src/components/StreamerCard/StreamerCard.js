import css from "./StreamerCard.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import HandleBtnClick from "../../functions/HandleBtnClick";

function StreamerCard(props) {
  const { id, name, avatar, upvotes, downvotes } = props;
  const [upvote, setUpvote] = useState(upvotes);
  const [downvote, SetDownvote] = useState(downvotes);

  async function handleClick(action) {
    const streamerId = id;
    const responce = await HandleBtnClick(streamerId, action);
    console.log(responce);
    if (action === true) {
      setUpvote(responce.data.upvotes);
      SetDownvote(responce.data.downvotes);
    } else {
      setUpvote(responce.data.upvotes);
      SetDownvote(responce.data.downvotes);
    }
  }

  return (
    <div id={id} className={css.card}>
      <Link to={`/streamers/${id}`} className={css.main_group}>
        <img src={avatar} alt="avatar" className={css.picture}></img>
        <h3 className={css.name}>{name}</h3>
      </Link>
      <div className={css.upvotes_group}>
        <button
          className={css.upvotes_btn}
          onClick={() => {
            handleClick(true);
          }}
        >
          <p className={css.upvotes}>{upvote}</p>
        </button>
        <button
          className={css.downvotes_btn}
          onClick={() => {
            handleClick(false);
          }}
        >
          <p className={css.downvotes}>{downvote}</p>
        </button>
      </div>
    </div>
  );
}

export default StreamerCard;
