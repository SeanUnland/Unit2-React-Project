import React from "react";
import { Route } from "react-router-dom";
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
        // console.log("Response -", response);
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
