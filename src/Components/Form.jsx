import { useState } from "react";
import axios from "axios";
import { getFollowersCtx } from "../Context/FollowersContext";

function Form() {
  const [username, setUsername] = useState("");

  const followersCtx = getFollowersCtx();
  console.log(followersCtx);
  
  function onUsernameChange(e) {
    setUsername(e.target.value);
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    const followersList = await axios.get(
      `https://api.github.com/users/${username}/followers?page=1`
    );
    console.log(followersList.data);
    followersCtx.setFollowersList(followersList.data);
  }

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          onChange={onUsernameChange}
          type="text"
          placeholder="Enter Your Name"
        />
        <input type="submit" value={"Get Unfollowers"} />
      </form>
    </>
  );
}

export default Form;
