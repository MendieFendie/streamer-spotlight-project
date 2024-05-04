import axios from "axios";
axios.defaults.baseURL =
  "https://streamer-spotlight-project-back-end.onrender.com";

async function GetAllStreamers() {
  try {
    const response = await axios.get();
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default GetAllStreamers;
