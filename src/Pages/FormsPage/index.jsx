import React, { Component } from 'react';
import { LastJobData, PersonalData, Curriculum } from '../../Components';

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
        showCurriculum: false,
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
    const { showCurriculum } = formsControl;
    return (
      <div>
        InitialPage
        <form>
          <PersonalData formsControl={formsControl} handleForms={this.handleForms} />
          <LastJobData showAlert={this.showAlert} formsControl={formsControl} handleForms={this.handleForms} />
        </form>
        <button type="button" onClick={() => this.handleForms('showCurriculum', true)}>Consolidar</button>
        <button type="button">Limpar</button>
        {
        showCurriculum === true &&
          <div>
            <Curriculum formsControl={formsControl}/>
          </div>
        }
      </div>
    );
  };
}
