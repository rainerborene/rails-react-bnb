import React from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

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

    this.props.createHousehold(this.props.household, this.props.nextStep);
  }

  isPending() {
    return this.props.householdForm.$form.pending;
  }

  render() {
    return (
      <div>
        <h1>New Household</h1>

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

            <Button type="submit" bsStyle="primary">Next</Button>

            {' '}

            <LinkContainer to={{ pathname: '/' }} active={false}>
              <Button disabled={this.isPending()}>Cancel</Button>
            </LinkContainer>
          </form>
        </div>
      </div>
    );
  }

}

export default HouseholdForm;
