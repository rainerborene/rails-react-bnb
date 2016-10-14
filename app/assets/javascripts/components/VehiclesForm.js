import React from 'react';

class VehiclesForm extends React.Component {

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {

  }

  render() {
    return (
      <div className="row">
        <form className="col-md-5" onSubmit={this.onSubmit}>
          <button type="button" className="btn btn-default prev-step">Previous</button>
          <button type="button" className="btn btn-primary next-step">Save and continue</button>
        </form>
      </div>
    );
  }

}

export default VehiclesForm;
