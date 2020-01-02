import React from "react";
import ReactPlayer from "react-player";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class Trailer extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button className="btnTrailer" onClick={this.openModal}>
          <i class="fa fa-video-camera"></i> BANDE ANNONCE
        </button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <i
              onClick={this.closeModal}
              class="fas fa-times-circle"
              style={{
                color: "#d1181e",
                fontSize: "25px",
                marginBottom: "10px"
              }}
            ></i>
          </div>

          <ReactPlayer url={this.props.trailer} playing />
        </Modal>
      </div>
    );
  }
}

export default Trailer;
