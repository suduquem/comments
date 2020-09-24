// Componenete que se va a encargar de la información que se va a mostrar del item

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CommentItem extends Component {
  getStyle = () => {
    return {
      background: '#61DAFB',
      padding: '10px',
      borderBottom: '1px #FFFFFF dotted',
    };
  };

  render() {
    console.log('Probando si CommentItem recibe las Props', this.props);
    //console.log("Probando si CommentItem recibe Props Comment", this.props.comment);

    // Destructuración: de todo ese objeto, sáqueme el id y el name
    const { id, body } = this.props.comment;

    return (
      <div style={this.getStyle()}>
        <p>{body}</p>

        {/* this hace referencia a todo lo que existe en el CommmentItem y en el render */}
        <button onClick={this.props.deleteComment.bind(this, id)}>x</button>
      </div>
    );
  }
}

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
};
