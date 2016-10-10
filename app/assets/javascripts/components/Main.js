import React from 'react';
import { Table } from 'react-bootstrap';

class Main extends React.Component {

  render() {
    return (
      <div className="container">
        <h1>House</h1>

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Address</th>
              <th>Zip</th>
              <th>City</th>
              <th>State</th>
              <th>Number Of Bedrooms</th>
              <th></th>
            </tr>
          </thead>
        </Table>
      </div>
    );
  }

}

export default Main;
