import React from "react";
import { Route, Link, Switch } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="Header">
      <nav className="navBar">
        <Link to="/Home">
          <a id="HomeButton">Home</a>
        </Link>

        <Link to="/Songs">
          <a id="SongsButton">Songs</a>
        </Link>
        <Link to="/Play">
          {/* <a id="PlayButton">Play</a> */}
          <img id="PlayButton" src="https://i.imgur.com/lAUbiUYt.jpg" alt="" />
        </Link>
        <Link to="/ArtistInformation">
          <a id="ArtistButton">Artist</a>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
