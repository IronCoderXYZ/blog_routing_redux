// NPM Imports
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
// Local Imports
import { fetchPost, deletePost } from '../actions';

class PostDetails extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }
  componentDidMount() {
    if (this.props.post) return;
    const { match, fetchPost } = this.props;
    fetchPost(match.params.id);
  }

  onDelete() {
    this.props.deletePost(this.props.match.params.id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;
    if (!post) return null;
    return (
      <div className="col-sm-6 mx-auto post-detail">
        <button className="btn btn-danger" onClick={this.onDelete}>
          Delete
        </button>
        <Link className="btn btn-secondary float-right" to="/">
          Back
        </Link>
        <h3>
          Title:<br />
          {post.title}
        </h3>
        <h6>
          Categories:<br />
          {post.categories}
        </h6>
        <p>
          Content:<br />
          {post.content}
        </p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {
  fetchPost,
  deletePost
})(PostDetails);
