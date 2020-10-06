import React from "react";
import { Route, Link, Switch } from "react-router-dom";

const Artist = ({ name }) => {
  console.log("Artist", name);

  return (
    <Switch>
      <div>
        <p>{name}</p>
      </div>
    </Switch>
  );
};

export default Artist;
