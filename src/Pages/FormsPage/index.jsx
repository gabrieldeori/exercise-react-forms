import React, { Component } from 'react';
import { LastJobData, PersonalData } from '../../Components';

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formsControl: {
        name: '',
        email: '',
        cpf: '',
        address: '',
        city: '',
        state: 'Amapá',
        home: '',
        summary: '',
        role: '',
        roleDescription: '',
      },
    };
    this.handleForms = this.handleForms.bind(this);
  };

  handleForms(key, value) {
    this.setState((prevState) => {
      return {
        formsControl: {
          ...prevState.formsControl,
          [key]: value,
        },
      }
    });
  }

  render() {
    const { formsControl } = this.state;
    return (
      <div>
        InitialPage
        <form>
          <PersonalData formsControl={formsControl} handleForms={this.handleForms} />
          <LastJobData formsControl={formsControl} handleForms={this.handleForms} />
        </form>
      </div>
    );
  };
}
