import React, { useState, useEffect } from "react";

function DadJokes() {
  const [joke, setJoke] = useState({});

  function GetJoke() {
    fetch("https://www.reddit.com/r/dadjokes/new/.json?t=day&limit=1")
      .then((response) => response.json())
      .then((json) => setJoke(json.data.children[0].data));
  }

  useEffect(() => {
    GetJoke();
  }, []);

  useEffect(() => {}, [joke]);

  return (
    <div className="joke">
      <h2>Dad Joke</h2>
      <p>{joke.title}</p>
      <p>{joke.selftext}</p>
    </div>
  );
}

export default DadJokes;
