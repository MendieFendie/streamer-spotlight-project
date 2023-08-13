import data from "../../streamers.json";
import StreamerCard from "../StreamerCard/StreamerCard";
import css from "./StreamersList.module.css";

console.log(data);

function StreamersList() {
  return (
    <ul className={css.streamersList}>
      {data.streamers.map((streamer) => (
        <StreamerCard
          key={streamer.id}
          id={streamer.id}
          name={streamer.name}
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