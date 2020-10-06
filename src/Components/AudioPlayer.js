import React from "react";

const AudioPlayer = ({ songs }) => {
  console.log("Songs", songs);
  return (
    <>
      <audio controls="controls">
        <source
          src="assets.ctfassets.net/5swixu5p2lln/2HDAL81zVPTYE37uGv0kMX/c16bc5a9185e7b7a674a6222bf0fa193/01_Black_Coffee__Feat._Bridjai___Chani____2.mp3"
          type="audio"
        ></source>
      </audio>
      <audio autoplay>
        <source src="assets.ctfassets.net/5swixu5p2lln/1J7VwQ6RLVt2la…7b4112ed31bb2ff74de0f547b/01_Passing_Memories.mp3"></source>
      </audio>
    </>
  );
};

export default AudioPlayer;
