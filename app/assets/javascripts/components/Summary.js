import React from 'react';

import { age, capitalize } from '../utils';

class Summary extends React.Component {

  constructor(props) {
    super(props);

    this.makePerson = this.makePerson.bind(this);
    this.makeVehicle = this.makeVehicle.bind(this);
  }

  makePerson(person) {
    return (
      <p key={person.id}>
        <strong>Full Name:</strong> {person.first_name} {person.last_name} <br />
        <strong>Email:</strong> {person.email} <br />
        <strong>Gender:</strong> {capitalize(person.gender)} <br />
        <strong>Age:</strong> {age(person.date_of_birth)}
      </p>
    );
  }

  makeVehicle(vehicle) {
    const person = this.props.people.find(p => p.id === vehicle.person_id);

    return (
      <p key={vehicle.id}>
        <strong>Car:</strong> {vehicle.make} {vehicle.model} <br />
        <strong>Year:</strong> {vehicle.year} <br />
        <strong>License Plate:</strong> {vehicle.license_plate} <br />
        <strong>Owner:</strong> {person.first_name} {person.last_name}
      </p>
    );
  }

  render() {
    return (
      <div className="row">
        <h3>Completed</h3>
        <p>You have successfully completed all steps.</p>

        <hr />

        <h4>Household Information</h4>
        <p>
          <strong>Address:</strong> {this.props.household.address}<br />
          <strong>Zip:</strong> {this.props.household.zip} <br />
          <strong>City:</strong> {this.props.household.city} <br />
          <strong>State:</strong> {this.props.household.state} <br />
          <strong>Number of Bedrooms:</strong> {this.props.household.number_of_bedrooms}
        </p>

        <hr />

        <h4>Persons</h4>
        {this.props.people.map(this.makePerson)}

        <hr />

        <h4>Vehicles</h4>
        {this.props.vehicles.map(this.makeVehicle)}
      </div>
    );
  }

}

export default Summary;
