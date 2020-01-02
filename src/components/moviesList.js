import React, { Component } from "react";
import { connect } from "react-redux";
import RatingMovie from "./ratingMovie";
import Update from "./update";
import { deleteMovie } from "../actions";
import { Link } from "react-router-dom";

class moviesList extends Component {
  render() {
    let movies = this.props.movies;

    return (
      <div className="movielist">
        {movies
          .filter(
            e =>
              e.title
                .toLowerCase()
                .includes(this.props.titleSearch.toLowerCase()) &&
              e.rating >= this.props.rateSearch
          )
          .map((el, i) => (
            <div class="card">
              <div class="poster">
                <img src={el.poster} />
              </div>
              <div class="details">
                <RatingMovie rate={el.rating} class="rating" />
                <h5>{el.title}</h5>
                <h5>{el.year}</h5>
                <Link to={`/description/${el.id}`}>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    style={{ marginTop: "30px" }}
                  >
                    Movie Description
                  </button>
                </Link>
                <div style={{ display: "flex" }}>
                  <Update idMovie={el.id} />

                  <button
                    className="btnMovie"
                    onClick={() => {
                      this.props.removeMovie(el.id);
                    }}
                  >
                    Remove Movie
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    movies: state.movies,
    titleSearch: state.inputSearch,
    rateSearch: state.rateSearch
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeMovie: payload => dispatch(deleteMovie(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(moviesList);
