import React from 'react';
import { Button } from 'react-bootstrap';

import FieldGroup from './FieldGroup';

class HouseholdForm extends React.Component {

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.isPending = this.isPending.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.isPending()) return;

    this.props.createHousehold(this.props.household);
  }

  isPending() {
    return this.props.householdForm.$form.pending;
  }

  render() {
    return (
      <div className="row">
        <form className="col-md-5" onSubmit={this.onSubmit}>
          <FieldGroup id="address" type="text" label="Address" model="household.address" />
          <FieldGroup id="zip" type="text" label="Zip" model="household.zip" />
          <FieldGroup id="city" type="text" label="City" model="household.city" />
          <FieldGroup id="state" type="text" label="State" model="household.state" />
          <FieldGroup
            id="number_of_bedrooms"
            type="text"
            label="Number Of Bedrooms"
            model="household.number_of_bedrooms"
          />

          <Button type="submit" disabled={this.isPending()} bsStyle="primary">
            Save and continue
          </Button>
        </form>
      </div>
    );
  }

}

export default HouseholdForm;
