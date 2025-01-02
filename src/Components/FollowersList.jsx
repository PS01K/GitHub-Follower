import { getFollowersCtx } from "../Context/FollowersContext";

function FollowersList() {
  const followersCtx = getFollowersCtx();
  console.log(followersCtx.followersList);
  
  return(
    <ul>
      {followersCtx.followersList.map((follower) => {
        return <li>{follower.login}</li>
      })}
    </ul>
  );
};

export default FollowersList;