import React from "react";
import { Route, Link, Switch } from "react-router-dom";

const Library = ({ musicInfo }) => {
  console.log("Music Info - ", musicInfo);
  const artwork = { musicInfo };

  return (
    <div className="Home">
      <Link>
        {/* <img
          src="images.ctfassets.net/5swixu5p2lln/7n38IXA4s3uXZZ…E/d6a00b940e0fef276a101076cd599501/Enlight169.jpg"
          alt=""
        /> */}
      </Link>
      <img src={artwork} alt="" />
    </div>
  );
};

export default Library;
