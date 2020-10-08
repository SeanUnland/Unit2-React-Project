import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="Header">
      <nav className="navBar">
        <Link to="/Home">
          <img id="HomeButton" src="https://i.imgur.com/y3itP3As.jpg" alt="" />
        </Link>

        <Link to="/Songs">
          <img id="SongsButton" src="https://i.imgur.com/ZuoBHdrs.jpg" alt="" />
        </Link>
        <Link to="/Play">
          <img id="PlayButton" src="https://i.imgur.com/lAUbiUYt.jpg" alt="" />
        </Link>
        <Link to="/ArtistInformation">
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
