import React from 'react';
import { Button, ButtonToolbar, FormGroup, FormControl, Panel, ControlLabel } from 'react-bootstrap';
import { createFieldClass, controls } from 'react-redux-form';

import FieldGroup from './FieldGroup';
import { validationState } from '../utils';

const SelectField = createFieldClass({
  FormControl: controls.select,
}, {
  componentMap: { FormControl },
});

class VehiclesForm extends React.Component {

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.isPending = this.isPending.bind(this);
    this.makeVehicle = this.makeVehicle.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.isPending()) return;

    this.props.createVehicle(this.props.vehicle);
  }

  isPending() {
    return this.props.vehicleForm.$form.pending;
  }

  makeVehicle(vehicle, index) {
    const person = this.props.people.find(p => p.id === vehicle.person_id);

    return (
      <Panel key={vehicle.id}>
        <button
          type="button"
          className="close pull-right"
          onClick={() => this.props.deleteVehicle(vehicle.id, index)}
        >
          <span>&times;</span>
        </button>

        <h3>
          {vehicle.make} {vehicle.model} {vehicle.year} <br />
          <small>
            {vehicle.license_plate} <br />
            {person.first_name} {person.last_name}
          </small>
        </h3>
      </Panel>
    );
  }

  makePersonOption(person) {
    return (
      <option key={person.id} value={person.id}>
        {person.first_name} {person.last_name}
      </option>
    );
  }

  render() {
    return (
      <div className="row">
        <form className="col-md-5" onSubmit={this.onSubmit}>
          <FieldGroup id="make" type="text" label="Make" model="vehicle.make" />
          <FieldGroup id="model" type="text" label="Model" model="vehicle.model" />
          <FieldGroup id="year" type="text" label="Year" model="vehicle.year" />
          <FieldGroup
            id="license_plate"
            type="text"
            label="License Plate"
            model="vehicle.license_plate"
          />

          <FormGroup controlId="person_id" validationState={validationState(this.props, 'vehicle.person')}>
            <ControlLabel>Person</ControlLabel>
            <SelectField model="vehicle.person_id">
              <FormControl componentClass="select" placeholder="select">
                <option value="select">select</option>
                {this.props.people.map(this.makePersonOption)}
              </FormControl>
            </SelectField>
          </FormGroup>

          <ButtonToolbar>
            <Button bsStyle="default" onClick={this.props.previousStep}>Previous</Button>
            <Button bsStyle="primary" type="submit" disabled={this.isPending()}>Create</Button>
            <Button bsStyle="default" onClick={this.props.nextStep}>Continue</Button>
          </ButtonToolbar>
        </form>

        <div className="col-md-6 col-md-offset-1">
          {this.props.vehicles.map(this.makeVehicle)}
        </div>
      </div>
    );
  }

}

export default VehiclesForm;
