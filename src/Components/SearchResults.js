import React from "react";
import { Route, Link, Switch } from "react-router-dom";

const SearchResults = ({ albums, albumArtwork }) => {
  console.log("Album Names", albums);

  return (
    <>
      <Link>
        <img
          src="images.ctfassets.net/5swixu5p2lln/Lzb3zZjK7TZRC1…w/38c8791dbbfc9a05ec2644bd5f9fdf52/Enlight169.jpg"
          alt=""
        ></img>
      </Link>
      <Link>
        <p>{albums}</p>
        <p>{albumArtwork}</p>
      </Link>
    </>
  );
};

export default SearchResults;
