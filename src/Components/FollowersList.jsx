import { getFollowersCtx } from "../Context/FollowersContext";

function FollowersList() {
  const followersCtx = getFollowersCtx();
  console.log(followersCtx.followersList);
  
  return(
    <ul>
      {/* {followersCtx.FollowersList.map((follower) => {
        return <li>{follower.login}</li>
      })} */}
    </ul>
  );
};

export default FollowersList;