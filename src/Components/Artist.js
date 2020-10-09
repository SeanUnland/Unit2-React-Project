import React from "react";

const Artist = ({ name, bio, picture }) => {
  return (
    <>
      <div className="artistInfo">
        <p>{name}</p>
      </div>
      <div className="bio">
        <p>{bio}</p>
      </div>
    </>
  );
};

export default Artist;
