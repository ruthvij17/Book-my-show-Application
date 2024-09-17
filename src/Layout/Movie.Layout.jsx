import React from "react";
import MovieNavbar from "../components/NavBar/MovieNavbar.component";

const MovieLayoutHOC =
  (component) =>
  ({ ...props }) => {
    return (
      <div>
        <MovieNavbar />
        <component {...props} />
      </div>
    );
  };

export default MovieLayoutHOC;
