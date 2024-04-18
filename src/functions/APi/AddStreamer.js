import axios from "axios";
const URL = process.env.URL;

async function AddStreamer({ name, platform, description, avatar }) {
  try {
    const responce = await axios.post(URL, {
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
