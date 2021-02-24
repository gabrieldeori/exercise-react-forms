import React, { Component } from 'react';

export default class index extends Component {

  render() {
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
          />
        </label>
        <label htmlFor="roleInput">
          <span className="labelText">Cargo:</span>
          <input
            maxLength="40"
            type="text"
            name="roleInput"
            id="roleInput"
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
          />
        </label>
      </fieldset>
    );
  };
}
