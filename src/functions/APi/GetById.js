import axios from "axios";

async function GetById(id) {
  try {
    const response = await axios.get(id);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default GetById;
