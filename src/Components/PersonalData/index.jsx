import React, { Component } from 'react';
import brazillianStates from '../../Database/brazillianStates';
import brazillianCities from '../../Database/brazillianCities';
import { connect } from 'react-redux';
import { handleFormsName, handleFormsEmail, handleFormsCpf, handleFormsAddress,
  handleFormsCity, handleFormsState, handleFormsHome
} from '../../Redux/Actions/FormsActions';

class index extends Component {
  render() {
    const { name, email, cpf, address, city, state, home, formsName, formsEmail, formsCpf,
      formsAddress, formsCity, formsState, formsHome } = this.props;
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
            value={name}
            onChange={(event) => formsName(event)}
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
            value={email}
            onChange={(event) => formsEmail(event)}
          />
        </label>
        <label htmlFor="cpfInput">
          <span className="labelText">CPF:</span>
          <input
            maxLength="14"
            placeholder="000.000.000-00"
            type="text"
            name="cpfInput"
            id="cpfInput"
            required
            value={cpf}
            onChange={(event) => formsCpf(event)}
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
            value={address}
            onChange={(event) => formsAddress(event)}
          />
        </label>
        <label htmlFor="cityInput">
          <span className="labelText">Cidade:</span>
          <select
            maxLength="28"
            name="cityInput"
            id="cityInput"
            required
            value={city}
            onChange={(event) => formsCity(event)}
          >
            {
              brazillianCities.map(({ city, admin_name }) =>
                state === admin_name &&
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
            value={state}
            onChange={(event) => formsState(event)}
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
              checked={home === "Casa"}
              required
              onChange={(event) => formsHome(event)}
            />
            <span className="radio-label-text">Casa</span>
          </label>
          <label className="radio-label-row" htmlFor="homeInput2">
            <input
              type="radio"
              name="homeInput"
              id="homeInput2"
              value="Apartamento"
              checked={home === "Apartamento"}
              required
              onChange={(event) => formsHome(event)}
            />
            <span className="radio-label-text">Apartamento</span>
          </label>
        </div>
      </fieldset>
    );
  };
}

function mapStateToProps(state) {
  return {
    name: state.forms.name,
    email: state.forms.email,
    cpf: state.forms.cpf,
    address: state.forms.address,
    city: state.forms.city,
    state: state.forms.state,
    home: state.forms.home,
    showAlert: state.forms.showAlert,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    formsName: (event) => dispatch(handleFormsName(event)),
    formsEmail: (event) => dispatch(handleFormsEmail(event)),
    formsCpf: (event) => dispatch(handleFormsCpf(event)),
    formsAddress: (event) => dispatch(handleFormsAddress(event)),
    formsCity: (event) => dispatch(handleFormsCity(event)),
    formsState: (event) => dispatch(handleFormsState(event)),
    formsHome: (event) => dispatch(handleFormsHome(event)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(index);
