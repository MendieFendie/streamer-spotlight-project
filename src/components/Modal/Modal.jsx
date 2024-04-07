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

  const handleChange = (e) => {
    const { name, value } = e.target;
    let genderValue = "";
    if (value === "man") {
      genderValue = `
short01,
short02,
short03,
short04,
short05,
short06,
short07,
short08,
short09,
short10,
short11,
short12,
short13,
short14,
short15,
short16,
short17,
short18,
short19,
short20,
short21,
short22,
short23,
short24`;
    } else if (value === "woman") {
      genderValue = `long01,
long02,
long03,
long04,
long05,
long06,
long07,
long08,
long09,
long10,
long11,
long12,
long13,
long14,
long15,
long16,
long17,
long18,
long19,
long20,
long21`;
    }

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
      avatar: `https://api.dicebear.com/8.x/pixel-art/svg?seed=${value}&hair=${genderValue}`,
    }));
    console.log(form.avatar);
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
