import axios from "axios";

async function GetAllStreamers() {
  try {
    const response = await axios.get("http://localhost:3001");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default GetAllStreamers;
