import React from 'react';
import { Button, Table, Glyphicon } from 'react-bootstrap';

class Households extends React.Component {

  static emptyRow() {
    return (
      <tr>
        <td colSpan="7" className="text-center">No records found.</td>
      </tr>
    );
  }

  constructor(props) {
    super(props);

    this.makeRow = this.makeRow.bind(this);
  }

  makeRow(item) {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.address}</td>
        <td>{item.zip}</td>
        <td>{item.city}</td>
        <td>{item.state}</td>
        <td>{item.number_of_bedrooms}</td>
        <td>
          <Button bsStyle="link" onClick={this.props.deleteHousehold.bind(null, item.id)}>
            <Glyphicon glyph="trash" />
          </Button>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <div className="container">
        <h1>Households</h1>

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Address</th>
              <th>Zip</th>
              <th>City</th>
              <th>State</th>
              <th>Number Of Bedrooms</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.households.map(this.makeRow)}
            {!this.props.households.length ? this.constructor.emptyRow() : null}
          </tbody>
        </Table>
      </div>
    );
  }

}

export default Households;
