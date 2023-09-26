import css from "./Modal.module.css";
import { useState } from "react";

function Modal({ openModalHandler }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name);
  };
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button className={css.closeBtn} onClick={openModalHandler}>
          {" "}
          X
        </button>
        <form onSubmit={handleSubmit}>
          <label for="name">Streamer name</label>
          <input type="text" name="name" id="name" />
          <label for="platform">Platform</label>
          <select id="platform" name="platform">
            <option value="Twitch">Twitch</option>
            <option value="YouTube">YouTube</option>
            <option value="TikTok">TikTok</option>
            <option value="Kick">Kick</option>
            <option value="Rumble">Rumble</option>
          </select>

          <textarea
            name="description"
            id=""
            cols="30"
            rows="10"
            placeholder="Description"
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
