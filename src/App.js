import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Library from "./Components/Library";
import Main from "./Components/Main";
import SearchResults from "./Components/SearchResults";
import Header from "./Components/Header";
import { client } from "./client";

import "./App.css";

class App extends React.Component {
  state = {
    music: [],
  };

  componentDidMount() {
    client.getEntries().then((response) => {
      console.log(response);
      this.setState({
        music: response.items,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <nav></nav>
        <div className="container"></div>
        <main>
          <Route>
            <Header />
          </Route>

          <Route>
            <Main mainPage={this.state.music} />
          </Route>

          <Route>
            <Library />
          </Route>

          <Route>
            <SearchResults />
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
