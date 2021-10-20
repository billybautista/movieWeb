import React from "react";
import Home from "./Pages/Home";
import MovieDetail from "./Pages/MovieDetail";

import { Route } from "react-router";

export default function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/movie/:id" component={MovieDetail} />
    </div>
  );
}
