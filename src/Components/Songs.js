import React from "react";
import { Link } from "react-router-dom";

const Songs = ({ songs }) => {
  // console.log("Song List", songs);

  return (
    <div className="songs">
      <Link to="/Play">
        <p className="songList">{songs}</p>
      </Link>
    </div>
  );
};

export default Songs;
