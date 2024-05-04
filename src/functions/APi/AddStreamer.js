import axios from "axios";

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
