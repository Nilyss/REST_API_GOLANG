import React from "react";
import "./App.scss";
import SearchBar from "./components/searchBar/searchBar";
import MovieFlow from "./components/movieFlow/movieFlow";

// context
import { MovieContextProvider } from "./Context";

function App() {
  const logo: string = require("./logo.png");

  return (
    <MovieContextProvider>
      <div className="App">
        <header className="App-header">
          <h1>Movies and Shows DB</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <section>
            <article>
              <SearchBar />
            </article>
          </section>
          <section>
            <article>
              <MovieFlow />
            </article>
          </section>
        </main>
      </div>
    </MovieContextProvider>
  );
}

export default App;
