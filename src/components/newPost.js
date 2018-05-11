import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input {...field.input} className="form-control" />
      </div>
    );
  }

  render() {
    return (
      <form className="col-sm-6 mx-auto">
        <Field name="title" label="Title" component={this.renderField} />
        <Field
          name="categories"
          label="Categories"
          component={this.renderField}
        />
        <Field name="content" label="Content" component={this.renderField} />
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  switch (values) {
    case !values.title:
      errors.title = 'Please provide a title';
    case !values.categories:
      errors.title = 'Please provide the categories';
    case !values.content:
      errors.title = 'Please provide your content';
  }
  // if (!values.title) errors.title = 'Please provide a title';
  // if (!values.categories) errors.categories = 'Please provide the categories';
  // if (!values.content) errors.content = 'Please provide your content';
  return errors;
}

export default reduxForm({
  validate,
  form: 'NewPostForm'
})(PostsNew);
