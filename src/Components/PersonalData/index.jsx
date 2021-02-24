import React, { Component } from 'react';
import brazillianStates from '../../Database/brazillianStates';
import brazillianCities from '../../Database/brazillianCities';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.noSpecialChar = this.noSpecialChar.bind(this);
  }

  noSpecialChar(stringChange) {
    stringChange = stringChange.replace(/[áàãâä]/ui, 'a');
    stringChange = stringChange.replace(/[éèêë]/ui, 'e');
    stringChange = stringChange.replace(/[íìîï]/ui, 'i');
    stringChange = stringChange.replace(/[óòõôö]/ui, 'o');
    stringChange = stringChange.replace(/[úùûü]/ui, 'u');
    stringChange = stringChange.replace(/[ç]/ui, 'c');
    stringChange = stringChange.replace(/[^a-z0-9]/i, '_');
    stringChange = stringChange.replace(/_+/, '_'); //
    return stringChange;
  }

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
            required
          />
        </label>
        <label htmlFor="addressInput">
          <span className="labelText">Endereço:</span>
          <input
            maxLength="200"
            placeholder="Ex.: Rua das flores, 200, Sao Valentim"
            type="text"
            name="addressInput"
            id="addressInput"
            required
          />
        </label>
        <label htmlFor="cityInput">
          <span className="labelText">Cidade:</span>
          <select
            maxLength="28"
            name="cityInput"
            id="cityInput"
            required
          >
            {
              brazillianCities.map(({ city, admin_name }) =>
                'Amapá' === admin_name &&
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
            required
          >
            {
              brazillianStates.map(({ native, objectId }) =>
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
              required
            />
            <span className="radio-label-text">Apartamento</span>
          </label>
        </div>
      </fieldset>
    );
  };
}
