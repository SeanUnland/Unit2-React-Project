import React from "react";
import Library from "./Library";
import Songs from "./Songs";
import AudioPlayer from "./AudioPlayer";
import Artist from "./Artist";
import { Route, Switch, Link } from "react-router-dom";

const Main = ({ mainPage }) => {
  console.log("Main Page - ", mainPage);
  return (
    <div>
      <Route path="/Home">
        {/* {mainPage.map((musicInfo, index) => ( */}
        <Library />
        {/* // musicInfo={musicInfo} key={index} /> */}
        {/* ))} */}
        <h2 className="analogHeader">
          Analog <span id="jukebox">Jukebox</span>
        </h2>
      </Route>

      <Route path="/Songs">
        {mainPage.map((songs, index) => (
          <Songs songs={songs.fields.songList} key={index} />
        ))}
      </Route>

      <Route path="/ArtistInformation">
        {mainPage.map((name, index) => (
          <Artist
            key={index}
            name={name.fields.artistName}
            bio={name.fields.myBio}
          />
        ))}
      </Route>

      <Route path="/Play">
        {/* {mainPage.map((songs, index) => ( */}
        <AudioPlayer

        // songs={songs.fields.song}
        // newSong={songs.fields.trackName}
        />
        {/* ))} */}
      </Route>
    </div>
  );
};

export default Main;
