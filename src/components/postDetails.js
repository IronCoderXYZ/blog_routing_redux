// NPM Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Local Imports
import { fetchPost } from '../actions';

class PostDetails extends Component {
  componentDidMount() {
    const { match, fetchPost } = this.props;
    const { id } = match.params;
    fetchPost(this.props.posts[id]);
  }

  render() {
    return <div>Post Details</div>;
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostDetails);
