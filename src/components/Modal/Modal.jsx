import css from "./Modal.module.css";
import { useState } from "react";
import AddStreamer from "../../functions/APi/AddStreamer";
import GetAllStreamers from "../../functions/APi/GetAllRequest";

function Modal({ openModalHandler }) {
  const [form, setForm] = useState({
    name: "",
    platform: "Twitch",
    description: "",
    avatar: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
      avatar: `https://api.dicebear.com/8.x/pixel-art/svg?seed=${value}`,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    await AddStreamer(form);
    await GetAllStreamers();
    setForm({
      name: "",
      platform: "",
      description: "",
    });
    openModalHandler();
  }

  return (
    <>
      <div className={css.backdrop}>
        <div className={css.modal}>
          <button className={css.closeBtn} onClick={openModalHandler}>
            {" "}
            X
          </button>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Streamer name</label>
            <input onChange={handleChange} type="text" name="name" id="name" />
            <label htmlFor="platform">Platform</label>
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
    </>
  );
}

export default Modal;
