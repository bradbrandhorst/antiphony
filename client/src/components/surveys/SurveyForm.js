import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field, values } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';


class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link
            to="/surveys"
            className="deep-orange darken-2 btn-flat white-text"
          >
            Cancel
            <i className="material-icons right">cancel</i>
          </Link>
          <button
            type="submit"
            className="blue darken-2 btn-flat right white-text"
          >
            Confirm
            <i className="material-icons right">input</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || ' ');

  if (!values.campaign) {
    errors.campaign = 'Please provide a Campaign Title.';
  }

  if (!values.subject) {
    errors.subject = 'Please provide an Email Subject Line.';
  }

  if (!values.body) {
    errors.body = 'Please provide text for the Email Body.';
  }

  if (!values.recipients) {
    errors.recipients =
      'Please provide a list of email addresses seperated by commas.';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
