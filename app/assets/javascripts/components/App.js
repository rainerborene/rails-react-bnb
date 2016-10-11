import React from 'react';

class App extends React.Component {

  render() {
    return (
      <div className="container">
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }

}

export default App;
