import React from 'react';
import { connect } from 'react-redux';
import { Errors, createFieldClass, controls } from 'react-redux-form';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

const FormField = createFieldClass({
  FormControl: controls.text,
}, {
  componentMap: { FormControl },
});

class FieldGroup extends React.Component {

  constructor(props) {
    super(props);

    this.validationState = this.validationState.bind(this);
  }

  validationState() {
    const model = this.props.model.split('.');
    const form = this.props[`${model[0]}Form`];
    const field = form[`${model[1]}`];
    return field && field.errors.length ? 'error' : null;
  }

  render() {
    return (
      <FormGroup controlId={this.props.id} validationState={this.validationState()}>
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormField model={this.props.model}>
          <FormControl {...this.props} />
        </FormField>
        <Errors model={this.props.model} component={HelpBlock} />
      </FormGroup>
    );
  }

}

export default connect(s => s)(FieldGroup);
