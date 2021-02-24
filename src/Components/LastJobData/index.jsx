import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleFormsSummary, handleFormsRole, handleFormsRoleDescription, handleFormsShowAlert } from '../../Redux/Actions/FormsActions';

class index extends Component {
  constructor(props) {
    super(props);
    this.showAlert = this.showAlert.bind(this);
  }

  showAlert() {
    const { showAlert, formsShowAlert } = this.props;
    if (showAlert === true) {
      window.alert('Preencha com cuidado esta informação.')
      formsShowAlert();
    }
  }

  render() {
    const { summary, role, roleDescription, formsSummary, formsRole,
      formsRoleDescription } = this.props;
    return (
      <fieldset>
        <span className="labelText">Resumo:</span>
        <label htmlFor="">
          <textarea
            cols="50"
            rows="20"
            maxLength="1000"
            name="summaryArea"
            id="summaryArea"
            value={summary}
            onChange={(event) => formsSummary(event)}
          />
        </label>
        <label htmlFor="roleInput">
          <span className="labelText">Cargo:</span>
          <input
            maxLength="40"
            type="text"
            name="roleInput"
            id="roleInput"
            value={role}
            onChange={(event) => formsRole(event)}
            onClick={this.showAlert}
          />
        </label>
        <label htmlFor="">
          <span className="labelText">Descrição do Cargo:</span>
          <textarea
            cols="40"
            rows="1"
            maxLength="500"
            name="roleArea"
            id="roleArea"
            value={roleDescription}
            onChange={(event) => formsRoleDescription(event)}
          />
        </label>
      </fieldset>
    );
  };
}

function mapStateToProps(state) {
  return {
    summary: state.forms.summary,
    role: state.forms.role,
    roleDescription: state.forms.roleDescription,
    showAlert: state.forms.showAlert,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    formsSummary: (event) => dispatch(handleFormsSummary(event)),
    formsRole: (event) => dispatch(handleFormsRole(event)),
    formsRoleDescription: (event) => dispatch(handleFormsRoleDescription(event)),
    formsShowAlert: () => dispatch(handleFormsShowAlert()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(index);
