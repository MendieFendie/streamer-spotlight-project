import Header from "../components/Header/Header";
import Modal from "../components/Modal/Modal";
import StreamersList from "../components/StreamersList/StreamersList";
import { useState } from "react";

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [streamers, setStreamer] = useState([]);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (formData) => {
    setStreamer([...streamers, formData]);
    console.log(formData);
  };

  return (
    <div>
      <Header onModalOpen={handleModalOpen} />
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onFormSubmit={handleFormSubmit}
      />
      <StreamersList listData={streamers} />
    </div>
  );
}

export default Main;
