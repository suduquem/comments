import React, { Component } from "react";
import PropTypes from "prop-types";

export default class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
    };
  }

  handleChange = (event) => this.setState({ body: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBody(this.state.body);
    this.setState({ body: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* onChange se usa cuando hay un cambio en ese elemento, para capturar lo que escribe el usuario */}
        <input
          type="text"
          name="body"
          placeholder="Add Comment"
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

AddComment.propTypes = {
    addBody: PropTypes.func.isRequired
};
