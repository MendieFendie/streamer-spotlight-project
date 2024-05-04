import StreamerCard from "../StreamerCard/StreamerCard";
import { RotatingLines } from "react-loader-spinner";
import css from "./StreamersList.module.css";

function StreamersList({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className={css.spinner}>
        <div className={css.spinnerContainer}>
          <RotatingLines
            visible={true}
            height={100}
            width={100}
            color="#4fa94d"
            ariaLabel="rotating-square-loading"
            wrapperStyle={{ position: "relative" }}
            wrapperClass=""
          />
        </div>
      </div>
    );
  }

  return (
    <>
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
    </>
  );
}

export default StreamersList;
