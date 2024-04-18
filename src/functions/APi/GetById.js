import axios from "axios";
const URL = process.env.URL;

async function GetById(id) {
  try {
    const response = await axios.get(URL`/${id}`, id);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default GetById;
