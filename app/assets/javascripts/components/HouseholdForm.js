import React from 'react';
import { Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class HouseholdForm extends React.Component {

  render() {
    return (
      <div>
        <h1>New Household</h1>

        <div className="row">
          <form className="col-md-5">
            <FieldGroup id="address" type="text" label="Address" />
            <FieldGroup id="zip" type="text" label="Zip" />
            <FieldGroup id="city" type="text" label="City" />
            <FieldGroup id="state" type="text" label="State" />
            <FieldGroup id="number_of_bedrooms" type="text" label="Number Of Bedrooms" />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    );
  }

}

export default HouseholdForm;
