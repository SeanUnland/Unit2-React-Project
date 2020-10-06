import React from "react";
import { Route, Link, Switch } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="Header">
      <nav className="navBar">
        <Link to="/Home">Home</Link>
        <Link to="/Albums">Albums</Link>
        <Link to="/Play">Play</Link>
        <Link to="/Artist">Artist</Link>
      </nav>
    </div>
  );
};

export default Header;
