import React from "react";

const About = (props) => {
  let myStyle = {
    //for headline
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "black" : "white",
  };

  return (
    <div className=" container " style={myStyle}>
      <h5 style={{ marginTop: "5rem" }}>
        News is a part of communication that keeps us updated with evolving
        events, issues, and characters in our world. NewsTime thus offers a
        variety of free news categories, including business, health, science,
        sports, technology, and entertainment
      </h5>
    </div>
  );
};

export default About;
