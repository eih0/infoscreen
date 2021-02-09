import React, {useState, useEffect} from "react";

function DadJokes(){

    const[joke, setJoke] = useState({});

    function GetJoke() {
        fetch("https://www.reddit.com/r/dadjokes/top/.json?t=day&limit=1")
        .then((response) => response.json())
        .then((json) => setJoke(json.data.children[0].data));
    }

    useEffect(() => {
        console.log("yoyo")
    }, [])

    return <div>Dad Jokes!</div>;
}

export default DadJokes;