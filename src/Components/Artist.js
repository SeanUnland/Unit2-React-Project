import React from "react";
import { Route, Link, Switch } from "react-router-dom";

const Artist = ({ name, bio }) => {
  console.log("Artist", name);

  return (
    <>
      <div className="artistName">
        <p>{name}</p>
      </div>
      <div className="bio">
        <p>{bio}</p>
      </div>
    </>
  );
};

export default Artist;
