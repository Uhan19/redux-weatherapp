import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({ term: e.target.value });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    // fetchh weather data
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecare in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.handleInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}
