import BtnRequest from "./APi/BtnRequest";

const HandleBtnClick = async (id, action) => {
  const userId = localStorage.getItem("StreamersPageUserId");
  try {
    const updatedData = await BtnRequest(id, action, userId);
    return updatedData;
  } catch (error) {
    console.error("Error handling button click:", error);
  }
};

export default HandleBtnClick;
