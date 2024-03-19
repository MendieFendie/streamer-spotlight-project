import StreamerDetailsPage from "../../components/StreamerPage/StreamerDetailsPage";
import css from "./StreamerPage.module.css";
import { useParams } from "react-router-dom";
import GetById from "../../functions/APi/GetById";
import { useEffect, useState } from "react";

function StreamerPage() {
  const { streamerId } = useParams();
  const [streamerData, setStreamerData] = useState(null);

  useEffect(() => {
    const fetchStreamerData = async () => {
      try {
        const data = await GetById(streamerId);
        setStreamerData(data);
      } catch (error) {
        console.error("Error fetching streamer data:", error);
      }
    };

    fetchStreamerData();
  }, [streamerId]);

  return (
    <div className={css.container}>
      {streamerData && <StreamerDetailsPage data={streamerData} />}
    </div>
  );
}

export default StreamerPage;
