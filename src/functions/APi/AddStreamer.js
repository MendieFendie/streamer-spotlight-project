import axios from "axios";

async function AddStreamer({ name, platform, description, avatar }) {
  try {
    const responce = await axios.post(
      "https://streamer-spotlight-project-back-end.onrender.com",
      {
        name,
        avatar,
        platform,
        description,
      }
    );
    return responce;
  } catch (error) {
    console.log(error);
  }
}

export default AddStreamer;
