import axios from "axios";
const URL = process.env.URL;

async function BtnRequest(id, action, userId) {
  try {
    const response = await axios.patch(URL, {
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
