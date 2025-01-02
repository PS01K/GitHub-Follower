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

  async function getFollowers(pageNo) {
    const followersList = await axios.get(
      `https://api.github.com/users/${username}/followers?page=${pageNo}`
    );
    return followersList.data;
  }

  let hasMoreData = true;
  let pageNo = 1;

  async function onFormSubmit(e) {
    e.preventDefault();
    let followersList = [];
    
    while (hasMoreData) {
      let list = await getFollowers(pageNo);
      followersList = followersList.concat(list);
      if (list.length < 30) {
        hasMoreData = false;
      }
      pageNo++;
    }

    console.log(followersList);
    followersCtx.setFollowersList(followersList);
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
