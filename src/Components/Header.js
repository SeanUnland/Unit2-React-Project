import React from "react";
import { Route, Link, Switch } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="Header">
      <nav className="navBar">
        <Link to="/Home">
          <span id="HomeButton">Home</span>
        </Link>

        <Link to="/Songs">
          <span id="SongsButton">Songs</span>
        </Link>
        <Link to="/Play">
          <span id="PlayButton">Play</span>
        </Link>
        <Link to="/ArtistInformation">
          <span id="ArtistButton">Artist Information</span>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
