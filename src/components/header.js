import React from "react";
import { connect } from "react-redux";
import { searchTitle } from "../actions";
import RatingMovie from "./ratingMovie";
import { Link } from "react-router-dom";

const navbar = props => {
  return (
    <div className="navbar">
      <h4>Movie App</h4>

      <input
        type="text"
        placeholder="Search ..."
        onChange={e => {
          props.searchedTitle(e.target.value);
        }}
      />

      <div className="searchRate">
        {" "}
        <RatingMovie rate={props.rate} />
      </div>
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    searchedTitle: title => dispatch(searchTitle(title))
  };
};
const mapStateToProps = state => {
  return {
    rate: state.rateSearch
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(navbar);
