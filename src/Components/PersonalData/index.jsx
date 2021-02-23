import React, { Component } from 'react';
import brazillianStates from '../../Database/brazillianStates';
import brazillianCities from '../../Database/brazillianCities';

export default class index extends Component {
  render() {
    const { formsControl, handleForms } = this.props;
    return (
      <fieldset>
        <label htmlFor="nameInput">
          <span className="labelText">Nome:</span>
          <input
          maxLength="40"
            placeholder="Ex.: SEU NOME"
            type="text"
            name="nameInput"
            id="nameInput"
            value={formsControl.name}
            onChange={
              ({ target: { value } }) => handleForms('name', value)
            }
            required
          />
        </label>
        <label htmlFor="emailInput">
          <span className="labelText">Email:</span>
          <input
            maxLength="50"
            placeholder="Ex.: anything@something.com"
            type="text"
            name="emailInput"
            id="emailInput"
            value={formsControl.email}
            onChange={
              ({ target: { value } }) => handleForms('email', value)
            }
            required
          />
        </label>
        <label htmlFor="cpfInput">
          <span className="labelText">CPF:</span>
          <input
            maxLength="11"
            placeholder="Ex.: 000.000.000-00"
            type="text"
            name="cpfInput"
            id="cpfInput"
            value={formsControl.cpf}
            onChange={
              ({ target: { value } }) => handleForms('cpf', value)
            }
            required
          />
        </label>
        <label htmlFor="addressInput">
          <span className="labelText">Address:</span>
          <input
            maxLength="200"
            placeholder="Ex.: Rua das flores, 200, São Valentim"
            type="text"
            name="addressInput"
            id="addressInput"
            value={formsControl.address}
            onChange={
              ({ target: { value } }) => handleForms('address', value)
            }
            required
          />
        </label>
        <label htmlFor="cityInput">
          <span className="labelText">Cidade:</span>
          <select
            maxLength="28"
            name="cityInput"
            id="cityInput"
            value={formsControl.city}
            onChange={
              ({ target: { value } }) => handleForms('city', value)
            }
            required
          >
            {
              brazillianCities.map(({ city, admin_name }) =>
                formsControl.state === admin_name &&
                <option key={city} value={city}>
                  {city}
                </option>
              )
            }
          </select>
        </label>
        <label htmlFor="stateInput">
          <span className="labelText">Estado:</span>
          <select
            name="stateInput"
            id="stateInput"
            value={formsControl.state}
            onChange={
              ({ target: { value } }) => handleForms('state', value)
            }
            required
          >
            {
              brazillianStates.map(({ native, name, objectId }) =>
                <option key={objectId} value={native}>
                  {native}
                </option>
              )
            }
          </select>
        </label>
        <span className="labelText">Tipo de habitação:</span>
        <div>
          <label className="radio-label-row" htmlFor="homeInput">
            <input
              type="radio"
              name="homeInput"
              id="homeInput"
              value="Casa"
              onChange={
                ({ target: { value } }) => handleForms('home', value)
              }
              required
            />
            <span className="radio-label-text">Casa</span>
          </label>
          <label className="radio-label-row" htmlFor="homeInput2">
            <input
              type="radio"
              name="homeInput"
              id="homeInput2"
              value="Apartamento"
              onChange={
                ({ target: { value } }) => handleForms('home', value)
              }
              required
            />
            <span className="radio-label-text">Apartamento</span>
          </label>
        </div>
      </fieldset>
    );
  };
}
