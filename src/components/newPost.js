// NPM Imports
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// Local Imports
import { createPost } from '../actions';

class PostsNew extends Component {
  onSubmit(values) {
    this.props.createPost(values);
  }

  renderField(field) {
    const { error, touched } = field.meta;
    return (
      <div className="form-group has-danger">
        <label>{field.label}</label>
        <input {...field.input} className="form-control" />
        <div className="text-danger">{touched && error}</div>
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form
        className="col-sm-6 mx-auto"
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
      >
        <Field name="title" label="Title" component={this.renderField} />
        <Field
          name="categories"
          label="Categories"
          component={this.renderField}
        />
        <Field name="content" label="Content" component={this.renderField} />
        <div className="text-right">
          <Link to="/" className="btn btn-danger">
            Cancel
          </Link>
          <button className="btn btn-primary">Submit Post</button>
        </div>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  // switch (values) {
  //   case !values.title:
  //     errors.title = 'Please provide a title';
  //   case !values.categories:
  //     errors.title = 'Please provide the categories';
  //   case !values.content:
  //     errors.title = 'Please provide your content';
  // }
  if (!values.title) errors.title = 'Please provide a title';
  if (!values.categories) errors.categories = 'Please provide the categories';
  if (!values.content) errors.content = 'Please provide your content';
  return errors;
}

export default reduxForm({
  validate,
  form: 'NewPostForm'
})(connect(null, { createPost })(PostsNew));
