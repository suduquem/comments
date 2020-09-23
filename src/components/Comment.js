import React, { Component } from "react";
import CommentItem from "./CommentItem";
import PropTypes from "prop-types";

class Comment extends Component {
  render() {
    console.log("Props que recibe Comment", this.props);
    return this.props.comments.map((item) => (
      // Para probar el componente:
      //   <h1 key={item.id}>Comment Works!</h1>
      <CommentItem
        key={item.id}
        comment={item}
        deleteComment={this.props.delComment}
      />
    ));
  }
}

Comment.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default Comment;
