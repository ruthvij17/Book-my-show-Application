import React, { useEffect, useState } from "react";
import MovieLayoutHOC from "../Layout/Movie.Layout";
import { useParams } from "react-router-dom";
import axios from "axios";

const MoviePage = () => {
  const { id } = useParams();
  const [cast, setCast] = useState();

  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
  }, []);
  return <div>MoviePage</div>;
};

export default MovieLayoutHOC(MoviePage);
