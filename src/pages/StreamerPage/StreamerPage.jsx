import StreamerDetailsPage from "../../components/StreamerPage/StreamerDetailsPage";
import data from "../../streamers.json";
import css from "./StreamerPage.module.css";
import { useParams } from "react-router-dom";

function StreamerPage() {
  let id = Number(useParams().streamerId);
  let streamers = data.streamers;

  const streamer = streamers.find((elem) => {
    return elem.id === id;
  });

  return (
    <div className={css.container}>
      <StreamerDetailsPage data={streamer} />
    </div>
  );
}

export default StreamerPage;
