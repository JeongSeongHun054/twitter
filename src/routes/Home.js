import React, { useState } from "react";

const Home = () => {
  const [nweet, setNweet] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    setNweet("");
  };

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNweet(value);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="What's on your mind?"
        maxLength={20}
        value={nweet}
        onChange={onChange}
      />
      <input type="submit" value="Tweet" onSubmit={onSubmit} />
    </form>
  );
};

export default Home;
