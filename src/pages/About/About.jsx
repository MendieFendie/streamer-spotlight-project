import React from "react";
import styles from "./About.module.css"; // Import module CSS file for styling

const AboutPage = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1>About Streamer Spotlight</h1>
      <p>
        Streamer Spotlight is my pet project, crafted with love and dedication.
        As a junior full-stack developer proficient in HTML, CSS, JavaScript,
        React, and Node.js, I wanted to create an application that celebrates
        the vibrant world of streamers and content creators. Whether you're a
        fan of live streams on platforms like Twitch, YouTube, or TikTok, this
        application is tailored for you.
      </p>
      <p>
        Discover new streamers, showcase your favorites, and engage with a
        community of fellow enthusiasts in real-time. Streamer Spotlight is not
        just an app; it's a platform where streaming enthusiasts can come
        together, share their passion, and explore the ever-growing landscape of
        streaming entertainment.
      </p>
    </div>
  );
};

export default AboutPage;
