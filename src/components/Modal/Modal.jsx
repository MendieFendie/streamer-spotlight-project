import css from "./Modal.module.css";

function Modal({ openModalHandler }) {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button className={css.closeBtn} onClick={openModalHandler}>
          {" "}
          X
        </button>
        <form>
          <label for="name">Streamer name</label>
          <input type="email" name="name" id="name" />
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
