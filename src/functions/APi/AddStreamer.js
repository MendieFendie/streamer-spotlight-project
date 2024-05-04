import axios from "axios";
axios.defaults.baseURL =
  "https://streamer-spotlight-project-back-end.onrender.com";

async function AddStreamer({ name, platform, description, avatar }) {
  try {
    const responce = await axios.post({
      name,
      avatar,
      platform,
      description,
    });
    return responce;
  } catch (error) {
    console.log(error);
  }
}

export default AddStreamer;
