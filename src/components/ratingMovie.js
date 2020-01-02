import React from "react";
import { connect } from "react-redux";

import { searchRate } from "../actions";

function ratingMovie({ rate, searchRate }) {
  let starts = [];
  for (let i = 0; i < 5; i++) {
    if (i < rate) {
      starts.push(
        <i class="fas fa-star" onClick={() => searchRate(i + 1)}></i>
      );
    } else {
      starts.push(
        <i class="far fa-star" onClick={() => searchRate(i + 1)}></i>
      );
    }
  }
  return <div> {starts}</div>;
}
const mapDispatchToProps = dispatch => {
  return {
    searchRate: x => {
      dispatch(searchRate(x));
    }
  };
};
export default connect(null, mapDispatchToProps)(ratingMovie);
