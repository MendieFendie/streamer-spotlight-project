import React from "react";

const StreamerList = ({ listData }) => {
  return (
    <div>
      {listData.map((streamer, index) => (
        <div key={index}>
          <h3>Name: {streamer.name}</h3>
          {Object.keys(streamer.descriptions).map((platform) => (
            <div key={platform}>
              <p>
                {platform}: {streamer.descriptions[platform]}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default StreamerList;
