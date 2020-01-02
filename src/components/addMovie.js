import React from "react";

import { Modal, Button } from "antd";
import { connect } from "react-redux";
import { addMovie } from "../actions";

class Add extends React.Component {
  state = {
    visible: false
  };

  showModal = () => {
    this.setState({
      visible: true,
      newId:Math.random(),
      newTitle: "",
      newYear: 0,
      newPoster: "https://i.redd.it/s8lk86v3r2m11.png",
      newRating: 0,
      newDesc: "",
      newTrailer: ""
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.showModal} className="btnadd">
          AJOUTER UN FILM
        </button>
        <Modal
          title="AJOUTER UN FILM"
          visible={this.state.visible}
          onOk={() => {
            this.props.addNewMovie({
              id:this .state.newId,
              title: this.state.newTitle,
              year: this.state.newYear,
              poster: this.state.newPoster,
              rating: this.state.newRating,
              desc: this.state.newDesc,
              trailer: this.state.newTrailer
            });
            this.handleOk();
          }}
          onCancel={this.handleCancel}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              name="rating"
              placeholder="Enter rating of movie..."
              onChange={e => {
                this.setState({ newRating: e.target.value });
              }}
              style={{ marginBottom: "10px" }}
            />
            <input
              name="poster"
              placeholder="Enter URL poster of movie..."
              onChange={e => {
                this.setState({ newPoster: e.target.value });
              }}
              style={{ marginBottom: "10px" }}
            />

            <input
              name="title"
              placeholder="Enter Title of movie..."
              onChange={e => {
                this.setState({ newTitle: e.target.value });
              }}
              style={{ marginBottom: "10px" }}
            />
            <input
              name="year"
              placeholder="Enter Year of movie..."
              onChange={e => {
                this.setState({ newYear: e.target.value });
              }}
              style={{ marginBottom: "10px" }}
            />
            <input
              name="desc"
              placeholder="Enter description of movie..."
              onChange={e => {
                this.setState({ newDesc: e.target.value });
              }}
              style={{ marginBottom: "10px" }}
            />
            <input
              name="trailer"
              placeholder="Enter trailer of movie..."
              onChange={e => {
                this.setState({ newTrailer: e.target.value });
              }}
              style={{ marginBottom: "10px" }}
            />
          </div>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewMovie: payload => dispatch(addMovie(payload))
  };
};

export default connect(null, mapDispatchToProps)(Add);
