import React from "react";
import { Route, Link, Switch } from "react-router-dom";

const Library = ({ musicInfo }) => {
  console.log("Music List - ", musicInfo);

  return (
    <Route path="/Home">
      <div className="Home">
        <Link to="/Play">
          <img src="https://i.imgur.com/LCgPuVZ.jpg" alt="" />
          <img src="https://i.imgur.com/TfdQlNn.jpg" alt="" />
          <img src="https://i.imgur.com/PYnvuuV.jpg" alt="" />
          <img src="https://i.imgur.com/CbwBQCL.jpg" alt="" />
          <img src="https://i.imgur.com/sYUoqo2.jpg" alt="" />
        </Link>
      </div>
    </Route>
  );
};

export default Library;
