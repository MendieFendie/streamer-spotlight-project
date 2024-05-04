import axios from "axios";
const URL = "https://streamer-spotlight-project-back-end.onrender.com";

async function GetAllStreamers() {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default GetAllStreamers;
