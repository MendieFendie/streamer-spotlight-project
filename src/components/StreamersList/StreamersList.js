import StreamerCard from "../StreamerCard/StreamerCard";
import { RotatingLines } from "react-loader-spinner";
import css from "./StreamersList.module.css";

function StreamersList({ data }) {
  if (!data || data.length === 0) {
    return (
      <RotatingLines
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    );
  }

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
