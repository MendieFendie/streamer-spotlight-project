import React, { useState } from "react";
import styles from "./StreamerSubmissionForm.module.css";

const StreamerSubmissionForm = ({ onFormSubmit }) => {
  const [streamerName, setStreamerName] = useState("");
  const [platforms, setPlatforms] = useState([]);
  const [platformInput, setPlatformInput] = useState("");
  const [descriptions, setDescriptions] = useState([]);

  const handleStreamerNameChange = (e) => {
    setStreamerName(e.target.value);
  };

  const handlePlatformInputChange = (e) => {
    setPlatformInput(e.target.value);
  };

  const handleDescriptionInputChange = (e, index) => {
    const updatedDescriptions = [...descriptions];
    updatedDescriptions[index] = e.target.value;
    setDescriptions(updatedDescriptions);
  };

  const addPlatform = (platform) => {
    if (!platforms.includes(platform)) {
      setPlatforms([...platforms, platform]);
      setDescriptions([...descriptions, ""]);
    }
  };

  const removePlatform = (index) => {
    const updatedPlatforms = [...platforms];
    updatedPlatforms.splice(index, 1);
    setPlatforms(updatedPlatforms);

    const updatedDescriptions = [...descriptions];
    updatedDescriptions.splice(index, 1);
    setDescriptions(updatedDescriptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const platformData = platforms.reduce((data, platform, index) => {
      data[platform] = descriptions[index];
      return data;
    }, {});

    const streamer = {
      name: streamerName,
      descriptions: platformData,
    };

    onFormSubmit(streamer);

    setStreamerName("");
    setPlatforms([]);
    setPlatformInput("");
    setDescriptions([]);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="streamerName">Streamer Name:</label>
        <input
          type="text"
          id="streamerName"
          value={streamerName}
          onChange={handleStreamerNameChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label>Streaming Platforms:</label>
        <div className={styles.platformList}>
          {platforms.map((platform, index) => (
            <div key={index} className={styles.platformItem}>
              <span>{platform}</span>
              <button
                type="button"
                className={styles.removeButton}
                onClick={() => removePlatform(index)}
              >
                &times;
              </button>
              <input
                type="text"
                className={styles.descriptionInput}
                value={descriptions[index]}
                onChange={(e) => handleDescriptionInputChange(e, index)}
                placeholder="Description"
              />
            </div>
          ))}
          <div className={styles.addPlatform}>
            {["Twitch", "YouTube", "TikTok", "Kick", "Rumble"].map(
              (platform) =>
                !platforms.includes(platform) && (
                  <div
                    key={platform}
                    className={styles.platformOption}
                    onClick={() => addPlatform(platform)}
                  >
                    <span>{platform}</span>
                    <button type="button" className={styles.addButton}>
                      +
                    </button>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default StreamerSubmissionForm;
