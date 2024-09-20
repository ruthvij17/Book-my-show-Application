import React from "react";
import MovieNavbar from "../components/NavBar/MovieNavbar.component";

const MovieLayoutHOC =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <MovieNavbar />
        <Component {...props} />
      </div>
    );
  };

export default MovieLayoutHOC;
