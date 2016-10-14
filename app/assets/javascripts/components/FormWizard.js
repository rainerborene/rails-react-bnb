import React from 'react';

import HouseholdForm from './HouseholdForm';
import PeopleForm from './PeopleForm';
import VehiclesForm from './VehiclesForm';
import Summary from './Summary';

function preventDefault(e) {
  e.preventDefault();
}

class FormWizard extends React.Component {

  constructor(props) {
    super(props);

    this.navClass = this.navClass.bind(this);
    this.tabClass = this.tabClass.bind(this);
  }

  navClass(step) {
    return this.props.wizard.step === step ? 'active' : 'disabled';
  }

  tabClass(step) {
    return `tab-pane ${this.props.wizard.step === step ? 'active' : null}`;
  }

  render() {
    return (
      <div className="row">
        <section>
          <div className="wizard">
            <div className="wizard-inner">
              <div className="connecting-line" />

              <ul className="nav nav-tabs">
                <li className={this.navClass(1)}>
                  <a href="#step1" onClick={preventDefault} title="Step 1">
                    <span className="round-tab">
                      <i className="glyphicon glyphicon-home" />
                    </span>
                  </a>
                </li>

                <li className={this.navClass(2)}>
                  <a href="#step2" onClick={preventDefault} title="Step 2">
                    <span className="round-tab">
                      <i className="glyphicon glyphicon-user" />
                    </span>
                  </a>
                </li>
                <li className={this.navClass(3)}>
                  <a href="#step3" onClick={preventDefault} title="Step 3">
                    <span className="round-tab">
                      <i className="glyphicon glyphicon-road" />
                    </span>
                  </a>
                </li>

                <li className={this.navClass(4)}>
                  <a href="#complete" onClick={preventDefault} title="Complete">
                    <span className="round-tab">
                      <i className="glyphicon glyphicon-ok" />
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="tab-content">
              <div className={this.tabClass(1)}>
                <HouseholdForm {...this.props} />
              </div>
              <div className={this.tabClass(2)}>
                <PeopleForm {...this.props} />
              </div>
              <div className={this.tabClass(3)}>
                <VehiclesForm {...this.props} />
              </div>
              <div className={this.tabClass(4)}>
                <Summary {...this.props} />
              </div>
              <div className="clearfix" />
            </div>
          </div>
        </section>
      </div>
    );
  }

}

export default FormWizard;
