import { useState } from "react";
import css from "./Header.module.css";
import AddBtn from "../Buttons/AddBtn/AddBtn";
import MainBtn from "../Buttons/MainBtn/MainBtn";
import Modal from "../Modal/Modal";

function Header() {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <header className={css.header}>
        <MainBtn />
        <AddBtn openModalHandler={openModalHandler} />
      </header>

      {openModal && <Modal openModalHandler={openModalHandler} />}
    </>
  );
}

export default Header;
