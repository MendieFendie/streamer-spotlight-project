import { nanoid } from "nanoid";

const UserIdCheck = () => {
  let userId = localStorage.getItem("StreamersPageUserId");

  if (!userId) {
    let genereateUserId = nanoid();

    localStorage.setItem("StreamersPageUserId", genereateUserId);

    console.log("User ID genereted Sucsessfuly:", genereateUserId);
  } else {
    console.log("UserId found in local storage:", userId);
  }
};

export default UserIdCheck;
