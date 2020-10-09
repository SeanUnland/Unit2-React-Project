import React from "react";
import Library from "./Library";
import Songs from "./Songs";
import AudioPlayer from "./AudioPlayer";
import Artist from "./Artist";
import { Route } from "react-router-dom";

const Main = ({ mainPage }) => {
  return (
    <div>
      <Route path="/Home">
        <Library />

        <h2 className="analogHeader">
          <span id="analog">Analog</span> <span id="jukebox">Jukebox</span>
        </h2>
      </Route>

      <Route path="/Songs">
        <h2 id="mySongs">My Songs</h2>
        {mainPage.map((songs, index) => (
          <Songs songs={songs.fields.songList} key={index} />
        ))}
      </Route>

      <Route path="/ArtistInformation">
        <h2 id="whoAmI">Who Am I?</h2>
        {mainPage.map((name, index) => (
          <Artist
            key={index}
            name={name.fields.artistName}
            bio={name.fields.myBio}
            picture={name.fields.albumArtworks}
          />
        ))}
      </Route>

      <Route path="/Play">
        <AudioPlayer />
      </Route>
    </div>
  );
};

export default Main;
