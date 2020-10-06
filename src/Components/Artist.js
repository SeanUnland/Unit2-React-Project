import React from "react";
import { Route, Link, Switch } from "react-router-dom";

const Artist = ({ artists, bio }) => {
  console.log("Artist", artists);

  return (
    <div>
      <Link>
        <p>{artists}</p>
      </Link>
      <p>{bio}</p>
    </div>
  );
};

export default Artist;
