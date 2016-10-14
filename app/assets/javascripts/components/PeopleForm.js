import React from 'react';
import { Button, ButtonToolbar, FormGroup, Radio, Panel } from 'react-bootstrap';
import { createFieldClass, controls } from 'react-redux-form';
import { age, capitalize } from '../utils';

import FieldGroup from './FieldGroup';

const RadioField = createFieldClass({
  Radio: controls.radio,
}, {
  componentMap: { Radio },
});

class PeopleForm extends React.Component {

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.isPending = this.isPending.bind(this);
    this.makePerson = this.makePerson.bind(this);
    this.nextStep = this.nextStep.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.isPending()) return;

    this.props.createPerson({
      household_id: this.props.household.id,
      ...this.props.person,
    });
  }

  isPending() {
    return this.props.personForm.$form.pending;
  }

  deletePerson(person, index) {
    this.props.deletePerson(person.id, index);
  }

  nextStep() {
    this.props.dispatch({ type: 'CHANGE_STEP', step: 3 });
  }

  makePerson(person, index) {
    return (
      <Panel key={person.id}>
        <button
          type="button"
          className="close pull-right"
          onClick={() => this.deletePerson(person, index)}
        >
          <span>&times;</span>
        </button>

        <h3>
          {`${person.first_name} ${person.last_name}`} <br />
          <small>
            {person.email} <br />
            {age(person.date_of_birth)} years old • {capitalize(person.gender)}
          </small>
        </h3>
      </Panel>
    );
  }

  render() {
    return (
      <div className="row">
        <form className="col-md-5" onSubmit={this.onSubmit}>
          <FieldGroup id="first_name" type="text" label="First Name" model="person.first_name" />
          <FieldGroup id="last_name" type="text" label="Last Name" model="person.last_name" />
          <FieldGroup id="email" type="text" label="Email" model="person.email" />
          <FieldGroup
            id="date_of_birth"
            type="text"
            label="Date of Birth"
            model="person.date_of_birth"
          />

          <FormGroup>
            <RadioField model="person.gender">
              <Radio name="gender" value="male" inline>Male</Radio>
            </RadioField>
            <RadioField model="person.gender">
              <Radio name="gender" value="female" inline>Female</Radio>
            </RadioField>
          </FormGroup>


          <ButtonToolbar>
            <Button type="submit" disabled={this.isPending()} bsStyle="primary">
              Create
            </Button>

            <Button bsStyle="default" onClick={this.nextStep}>Continue</Button>
          </ButtonToolbar>
        </form>

        <div className="col-md-6 col-md-offset-1">
          {this.props.people.map(this.makePerson)}
        </div>
      </div>
    );
  }

}

export default PeopleForm;
