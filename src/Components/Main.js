import React from "react";
import Library from "./Library";
import SearchResults from "./SearchResults";
import AudioPlayer from "./AudioPlayer";
import { Route, Switch, Link } from "react-router-dom";

const Main = ({ mainPage }) => {
  return (
    <div>
      <nav>
        <Link></Link>
        <Link></Link>
        <Link></Link>
      </nav>
      <Route>
        {mainPage.map((musicInfo, index) => (
          <Library musicInfo={musicInfo} key={index} />
        ))}
      </Route>

      <Route>
        {mainPage.map((albums, index) => (
          <SearchResults
            albums={albums.fields.album}
            key={index}
            artist={albums.fields.artist}
          />
        ))}
      </Route>

      <Route>
        {mainPage.map((songs, index) => (
          <AudioPlayer songs={songs.fields.song} />
        ))}
      </Route>
    </div>
  );
};

export default Main;
