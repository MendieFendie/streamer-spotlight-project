import StreamerCard from "../StreamerCard/StreamerCard";
import css from "./StreamersList.module.css";

function StreamersList({ data }) {
  return (
    <ul className={css.streamersList}>
      {data.map((streamer) => (
        <StreamerCard
          key={streamer._id}
          id={streamer._id}
          name={streamer.name}
          avatar={streamer.avatar}
          platform={streamer.platform}
          description={streamer.description}
          upvotes={streamer.upvotes}
          downvotes={streamer.downvotes}
        />
      ))}
    </ul>
  );
}

export default StreamersList;
