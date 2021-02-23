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
        showAlert: true,
      },
    };
    this.handleForms = this.handleForms.bind(this);
    this.showAlert = this.showAlert.bind(this);
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

  showAlert() {
    const { formsControl: { showAlert } } = this.state;
    showAlert === true && window.alert('Preencha com cuidado esta informação.')
      this.setState((prevState) => {
        return {
          formsControl: {
            ...prevState.formsControl,
            showAlert: false,
          },
        };
      });
  }

  render() {
    const { formsControl } = this.state;
    return (
      <div>
        InitialPage
        <form>
          <PersonalData formsControl={formsControl} handleForms={this.handleForms} />
          <LastJobData showAlert={this.showAlert} formsControl={formsControl} handleForms={this.handleForms} />
        </form>
        <button type="button">Consolidar</button>
        <button type="button">Limpar</button>
      </div>
    );
  };
}
