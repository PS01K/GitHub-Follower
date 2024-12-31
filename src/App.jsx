import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import FollowersContext from "./Context/FollowersContext";
import FollowersList from "./Components/FollowersList";

function App() {
  return (
    <>
      <FollowersContext>
        <>
          <h1>GitHub Unfollowers Checker</h1>
          <Form />
          <FollowersList />
        </>
      </FollowersContext>
    </>
  );
}

export default App;
