import React, { Component } from 'react';
import { connect } from 'react-redux';

class index extends Component {
  render() {
    const { name, email, cpf, address, city, state, home, summary,
      role, roleDescription } = this.props;
    return (
      <article>
        <p><span>Nome:</span> <span>{name}</span></p>
        <p><span>Email:</span> <span>{email}</span></p>
        <p><span>CPF:</span> <span>{cpf}</span></p>
        <p><span>Endereço:</span> <span>{address}</span></p>
        <p><span>Cidade:</span> <span>{city}</span></p>
        <p><span>Estado:</span> <span>{state}</span></p>
        <p><span>Moradia:</span> <span>{home}</span></p>
        <p><span>Resumo:</span> <span>{summary}</span></p>
        <p><span>Cargo:</span> <span>{role}</span></p>
        <p><span>Descrição do Cargo:</span> <span>{roleDescription}</span></p>
      </article>
    );
  };
}

function mapStateToProps({ forms }) {
  return {
    name: forms.name,
    email: forms.email,
    cpf: forms.cpf,
    address: forms.address,
    city: forms.city,
    state: forms.state,
    home: forms.home,
    summary: forms.summary,
    role: forms.role,
    roleDescription: forms.roleDescription,
  };
}

export default connect(mapStateToProps)(index);
