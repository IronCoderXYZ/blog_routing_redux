// NPM Imports
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
// Local Imports
import { fetchPost } from '../actions';

class PostDetails extends Component {
  constructor(props) {
    super(props);
    this.onBackClicked = this.onBackClicked.bind(this);
  }
  componentDidMount() {
    const { match, fetchPost } = this.props;
    fetchPost(match.params.id);
  }

  onBackClicked() {
    this.props.history.push('/');
  }

  render() {
    const { post } = this.props;
    if (!post) return null;
    return (
      <div className="col-sm-6 mx-auto post-detail">
        <button onClick={this.onBackClicked} className="btn btn-secondary">
          Back to Overview
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostDetails);
