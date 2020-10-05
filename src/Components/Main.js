import React from "react";
import Library from "./Library";
import SearchResults from "./SearchResults";
import AudioPlayer from "./AudioPlayer";

const Main = ({ mainPage }) => {
  return (
    <div>
      {mainPage.map((musicInfo, index) => (
        <Library musicInfo={musicInfo} key={index} />
      ))}

      {mainPage.map((albums, index) => (
        <SearchResults
          albums={albums.fields.album}
          key={index}
          artist={albums.fields.artist}
        />
      ))}

      {mainPage.map((songs, index) => (
        <AudioPlayer songs={songs.fields.song} />
      ))}
    </div>
  );
};

export default Main;
