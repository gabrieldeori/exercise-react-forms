import React, { Component } from 'react';

export default class index extends Component {

  render() {
    const { formsControl, handleForms, showAlert } = this.props;
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
            value={formsControl.summary}
            onChange={({ target: { value } }) => handleForms('summary', value)}
          />
        </label>
        <label htmlFor="roleInput">
          <span className="labelText">Cargo:</span>
          <input
            maxLength="40"
            type="text"
            name="roleInput"
            id="roleInput"
            value={formsControl.role}
            onChange={({ target: { value } }) => handleForms('role', value)}
            onClick={showAlert}
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
            value={formsControl.roleDescription}
            onChange={({ target: { value } }) => handleForms('roleDescription', value)}
          />
        </label>
      </fieldset>
    );
  };
}
