import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Library from "./Components/Library";
import Main from "./Components/Main";
import Songs from "./Components/Songs";
import Header from "./Components/Header";
import Artist from "./Components/Artist";
import { client } from "./client";

import "./App.scss";

class App extends React.Component {
  state = {
    music: [],
  };

  componentDidMount() {
    client
      .getEntries()
      .then((response) => {
        console.log("Response -", response);
        this.setState({
          music: response.items,
        });
      })
      .catch(console.error);
  }

  render() {
    return (
      <div className="App">
        <main>
          <Route>
            <Header />
          </Route>

          <Route>
            <div className="mainPage">
              <Main mainPage={this.state.music} />
            </div>
          </Route>

          <Route>
            <Library />
          </Route>

          <Route>
            <Songs />
          </Route>

          <Route>
            <Artist />
          </Route>
        </main>
      </div>
    );
  }
}

export default App;

// Fetch function for Discogs API
//  const[discogsData, setDiscogsData] = React.useState({ });
//   const handleSubmit = (title) => {
//     fetch(`https://api.discogs.com/artists/1/releases?page=1&per_page=75`)
//       .then((results) => results.json())
//       .then((data) => {
//         console.log(`this is the - `, data);
//         setDiscogsData(data);
//       });
//   };

// Return for old function App
// function App() {

// /  const[discogsData, setDiscogsData] = React.useState({ });
//   const handleSubmit = (title) => {
//     fetch(`https://api.discogs.com/artists/1/releases?page=1&per_page=75`)
//       .then((results) => results.json())
//       .then((data) => {
//         console.log(`this is the - `, data);
//         setDiscogsData(data);
//       });
//   };

//     return (
//     <div className="App">
//       <nav></nav>

//       <div className="container"></div>

//       <main>
//         <Route>
//           <Header />
//         </Route>

//         <Route>
//           <Main handleSubmit={handleSubmit} />
//         </Route>

//         <Route>
//           <Library />
//         </Route>

//         <Route>
//           <SearchResults />
//         </Route>
//       </main>
//     </div>
//   );
// }
