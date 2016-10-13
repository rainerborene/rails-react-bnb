import React from 'react';

class PeopleForm extends React.Component {

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {

  }

  // makeRow() {
  //   return ();
  // }

  render() {
    // TODO: table listing people
    // TODO: form on footer
    return (
      <div>
        <h1>People</h1>

        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th></th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }

}

export default PeopleForm;
