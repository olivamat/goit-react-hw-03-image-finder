import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./SearchForm.module.css";

export default class SearchForm extends Component {
  state = { query: "" };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmitForm({ ...this.state });
    this.setState({ query: "" });
  };

  render() {
    const { query } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          placeholder="Search images ..."
          value={query}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired
};
