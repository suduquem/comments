import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      body: '',
    };
  }

  handleChange = (event) => this.setState({ body: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addComment(this.state);
    this.setState({ body: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* onChange se usa cuando hay un cambio en ese elemento, para capturar lo que escribe el usuario */}
        <input
          type='text'
          name='body'
          placeholder='Add Comment'
          onChange={this.handleChange}
          value={this.state.body} //Para que se limpie el campo
        />
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

AddComment.propTypes = {
  addComment: PropTypes.func.isRequired,
};
