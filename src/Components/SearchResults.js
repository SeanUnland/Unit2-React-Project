import React from "react";
import { Route, Link, Switch } from "react-router-dom";

const SearchResults = ({ albums, artist }) => {
  console.log("Album Names", albums);
  return (
    <>
      <Link>
        <p>{albums}</p>
      </Link>
      <Link>
        <p>{artist}</p>
      </Link>
    </>
  );
};

export default SearchResults;
