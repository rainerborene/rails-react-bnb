import React from 'react';
import { connect } from 'react-redux';
import { Errors, createFieldClass, controls } from 'react-redux-form';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

import { validationState } from '../utils';

const FormField = createFieldClass({
  FormControl: controls.text,
}, {
  componentMap: { FormControl },
});

function FieldGroup(props) {
  return (
    <FormGroup controlId={props.id} validationState={validationState(props)}>
      <ControlLabel>{props.label}</ControlLabel>
      <FormField model={props.model}>
        <FormControl {...props} />
      </FormField>
      <Errors model={props.model} component={HelpBlock} />
    </FormGroup>
  );
}

export default connect(s => s)(FieldGroup);
