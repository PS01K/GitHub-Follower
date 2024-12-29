import { useState } from "react";

function Form() {
  const [username, setUsername] = useState("");

  function onUsernameChange(e) {
    setUsername(e.target.value);
  }

  function onFormSubmit(e) {
    e.preventDefault();
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
