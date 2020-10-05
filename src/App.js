import React from "react";
import Library from "./Components/Library";

import "./App.css";

function App() {
  fetch(`https://api.discogs.com/artists/1/releases?page=1&per_page=75`)
    .then((results) => results.json())
    .then((data) => {
      console.log(data);
    });

  return (
    <div className="App">
      <Library />
    </div>
  );
}

export default App;
