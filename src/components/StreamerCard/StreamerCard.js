import css from "./StreamerCard.module.css";
import data from "../../streamers.json";

function StreamerCard(props) {
  const { id, name, platform, description, upvotes, downvotes } = props;
  function upvote(id) {
    const streamersArray = JSON.parse(data);
    console.log(streamersArray);
    const streamerIndex = streamersArray.findIndex(
      (streamer) => streamer.id === id
    );

    if (streamerIndex !== -1) {
      // const upvotes = streamersArray[streamerIndex].upvotes;
      // console.log(upvotes);
    } else {
      console.log("Streamer not found");
    }
  }

  function downvote(id) {}
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
        <button className={css.upvotes_btn} onClick={() => upvote(id)}>
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
