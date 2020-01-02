import React from "react";
import { connect } from "react-redux";
import RatingMovie from "./ratingMovie";
import TrailerMovie from "./trailerMovie";
import ReactPlayer from "react-player";

import { Link } from "react-router-dom";

function description(props) {
  const movie = props.movies.filter(
    e => e.id === Number(props.match.params.id)
  )[0];
  return (
    <div className="description">
      <Link to="/">
        <i
          class="fas fa-arrow-alt-circle-left"
          style={{ color: "#d1181e", marginLeft: "20px", fontSize: "25px" }}
        ></i>
      </Link>

      <div className="MovieDesc">
        <div>
          <img src={movie.poster} className="desc-img" />
        </div>
        <div className="detailMovie">
          <h1 style={{ color: "#d1181e" }}>
            {movie.title}-{movie.year}{" "}
          </h1>
          <RatingMovie rate={movie.rating} />
          <p style={{ marginTop: "10px" }}>{movie.desc}</p>
          <TrailerMovie trailer={movie.trailer} />
        </div>
      </div>
    </div>
  );
}

const MSTP = state => ({
  movies: state.movies
});
export default connect(MSTP)(description);
