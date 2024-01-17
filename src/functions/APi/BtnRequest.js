import axios from "axios";

async function BtnRequest(params) {
  try {
    const response = await axios.patch("http:localhost:3001", params);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default BtnRequest;
