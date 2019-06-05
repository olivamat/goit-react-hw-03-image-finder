import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

export default class Modal extends Component {
  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== "Escape") return;
    this.props.onCloseModal();
  };

  handleBackdropClick = e => {
    const { current } = this.backdropRef;
    if (current && e.target !== current) return;
    this.props.onCloseModal();
  };

  render() {
    const { children } = this.props;
    return (
      <div
        className={styles.backdrop}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
        onKeyPress={this.handleKeyPress}
        role="presentation"
      >
        <div className={styles.modal}>{children}</div>
      </div>
    );
  }
}
Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired
};
