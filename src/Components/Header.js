import React from "react";
import { Route, Link, Switch } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="Header">
      <nav className="navBar">
        <Link to="/Home">
          {/* <a id="HomeButton">Home</a> */}
          <img id="HomeButton" src="https://i.imgur.com/y3itP3As.jpg" alt="" />
        </Link>

        <Link to="/Songs">
          {/* <a id="SongsButton">Songs</a> */}
          <img id="SongsButton" src="https://i.imgur.com/ZuoBHdrs.jpg" alt="" />
        </Link>
        <Link to="/Play">
          {/* <a id="PlayButton">Play</a> */}
          <img id="PlayButton" src="https://i.imgur.com/lAUbiUYt.jpg" alt="" />
        </Link>
        <Link to="/ArtistInformation">
          {/* <a id="ArtistButton">Artist</a> */}
          <img
            id="ArtistButton"
            src="https://i.imgur.com/VSv1Gpks.jpg"
            alt=""
          />
        </Link>
      </nav>
    </div>
  );
};

export default Header;
