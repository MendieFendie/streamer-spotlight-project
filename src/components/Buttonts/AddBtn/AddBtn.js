import css from "./AddBtn.module.css";

function AddBtn() {
  return (
    <a className={css.add_btn} href="/">
      Add Streamer
    </a>
  );
}

export default AddBtn;
