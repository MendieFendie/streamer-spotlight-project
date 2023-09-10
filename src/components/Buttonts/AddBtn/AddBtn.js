import css from "./AddBtn.module.css";

function AddBtn({ openModalHandler }) {
  return (
    <button onClick={openModalHandler} className={css.add_btn} href="/">
      Add Streamer
    </button>
  );
}

export default AddBtn;
