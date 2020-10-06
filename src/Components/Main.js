import React from "react";
import Library from "./Library";
import SearchResults from "./SearchResults";
import AudioPlayer from "./AudioPlayer";
import Artist from "./Artist";
import { Route, Switch, Link } from "react-router-dom";

const Main = ({ mainPage }) => {
  return (
    <div>
      <Route path="/Home">
        {mainPage.map((musicInfo, index) => (
          <Library musicInfo={musicInfo} key={index} />
        ))}
        <h2 className="analogHeader">Analog Jukebox</h2>
      </Route>

      <Route path="/Albums">
        {mainPage.map((albums, index) => (
          <SearchResults albums={albums.fields.album} key={index} />
        ))}
      </Route>

      <Route path="/Artist">
        {mainPage.map((artists, index) => (
          <Artist artists={artists.fields.artistName} key={index} />
        ))}
      </Route>

      <Route path="/Play">
        {mainPage.map((songs, index) => (
          <AudioPlayer songs={songs.fields.song} />
        ))}
      </Route>
    </div>
  );
};

export default Main;
