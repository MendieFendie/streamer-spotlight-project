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
    gender: "",
  });

  const manNames = ["Zoey", "Boo", "Bubba", "Angel", "Oreo", "Mittens", "Coco"];
  const womanNames = [
    "Zoe",
    "Patches",
    "Gracie",
    "Whiskers",
    "Tinkerbell",
    "Maggie",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    let genderValue = "";
    let randomName = "";
    let randomNumber = Math.floor(Math.random() * 24) + 1;
    if (value === "man") {
      genderValue = `short${randomNumber.toString().padStart(2, "0")}`;
      randomName = manNames[Math.floor(Math.random() * manNames.length)];
    } else if (value === "woman") {
      genderValue = `long${randomNumber.toString().padStart(2, "0")}`;
      randomName = womanNames[Math.floor(Math.random() * womanNames.length)];
    }

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
      avatar: `https://api.dicebear.com/8.x/pixel-art/svg?seed=${randomName}&hair=${genderValue}`,
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
      gender: "",
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
            <p className={css.gender}>Gender:</p>
            <label htmlFor="gender">
              <input
                onChange={handleChange}
                type="radio"
                name="gender"
                id="man"
                value="man"
              />
              Man
            </label>
            <label htmlFor="gender">
              <input
                onChange={handleChange}
                type="radio"
                name="gender"
                id="woman"
                value="woman"
              />
              Woman
            </label>
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
