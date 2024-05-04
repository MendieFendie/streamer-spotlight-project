import axios from "axios";
axios.defaults.baseURL =
  "https://streamer-spotlight-project-back-end.onrender.com";

async function BtnRequest(id, action, userId) {
  try {
    const response = await axios.patch({
      id,
      action,
      userId,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default BtnRequest;
