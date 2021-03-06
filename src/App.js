import React from "react";
import { Link } from "@reach/router";
import { Store } from "./store";

function App(props) {
  const { state } = React.useContext(Store);

  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Replace Redux with useConext</h1>
          <p>Pick your favourite episodes learn CI/CD</p>
        </div>
        <div>
          <Link to="/">Home</Link>{" "}
          <Link to="/faves">Favourite(s) {state.favourites.length}</Link>
        </div>
      </header>
      {props.children}
    </React.Fragment>
  );
}
export default App;
