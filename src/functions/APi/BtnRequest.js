import axios from "axios";

async function BtnRequest(id, action, userId) {
  try {
    const response = await axios.patch("http://localhost:3001", {
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
