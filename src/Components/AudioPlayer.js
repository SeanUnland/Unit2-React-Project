import React from "react";

const AudioPlayer = ({ songs, newSong }) => {
  console.log("Songs", songs);
  console.log("New Song - ", newSong);
  return (
    <>
      <audio controls="controls">
        <source
          src="assets.ctfassets.net/5swixu5p2lln/2HDAL81zVPTYE37uGv0kMX/c16bc5a9185e7b7a674a6222bf0fa193/01_Black_Coffee__Feat._Bridjai___Chani____2.mp3"
          type="audio"
        ></source>
      </audio>
      <audio>{newSong}</audio>
    </>
  );
};

export default AudioPlayer;
