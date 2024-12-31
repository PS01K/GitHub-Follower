import { createContext, useContext, useState } from "react";

const FollowersContextComponent = createContext({});

function FollowersContext(props) {
  const [followersList, setFollowersList] = useState([]);

  return (
    <FollowersContextComponent.Provider
      value={{ followersList, setFollowersList }}
    >
      {props.children}
    </FollowersContextComponent.Provider>
  );
}

export function getFollowersCtx() {
  const ctx = useContext(FollowersContextComponent);
  return ctx;
}

export default FollowersContext;
