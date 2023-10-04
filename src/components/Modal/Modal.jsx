import css from "./Modal.module.css";
import { useState } from "react";
import { nanoid } from "nanoid";

function Modal({ openModalHandler }) {
  const [form, setForm] = useState({
    id: nanoid(),
    name: "",
    platform: "Twitch",
    description: "",
    upvotes: 0,
    downvotes: 0,
  });

  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(form);

    setForm({
      id: "",
      name: "",
      platform: "",
      description: "",
      upvotes: 0,
      downvotes: 0,
    });
    openModalHandler();
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
          <input onChange={handleChange} type="text" name="name" id="name" />
          <label for="platform">Platform</label>
          <select onChange={handleChange} id="platform" name="platform">
            <option value="Twitch">Twitch</option>
            <option value="YouTube">YouTube</option>
            <option value="TikTok">TikTok</option>
            <option value="Kick">Kick</option>
            <option value="Rumble">Rumble</option>
          </select>

          <textarea
            onChange={handleChange}
            name="description"
            id="description"
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
