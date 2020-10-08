import React from "react";
// import { Route, Link, Switch } from "react-router-dom";

const Artist = ({ name, bio, picture }) => {
  //   console.log("Artist", name);
  //   console.log("picture - ", picture);

  return (
    <>
      <div className="artistInfo">
        <p>{name}</p>
      </div>
      <div className="bio">
        <p>{bio}</p>
      </div>
    </>
  );
};

export default Artist;
