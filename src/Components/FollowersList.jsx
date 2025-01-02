import { getFollowersCtx } from "../Context/FollowersContext";

function FollowersList() {
  const followersCtx = getFollowersCtx();
  console.log(followersCtx.followersList);

  return (
    <ul>
      {followersCtx.followersList.map((follower) => {
        return (
          <li
            key={follower.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <img
              src={follower.avatar_url}
              style={{
                maxWidth: "80px",
                borderRadius: "50%",
                marginRight: "25px",
              }}
            />
            {follower.login}
          </li>
        );
      })}
    </ul>
  );
}

export default FollowersList;
