import React, { Component } from 'react';

export default class index extends Component {
  render() {
    const { formsControl } = this.props;
    return (
      <article>
        <p><span>Nome:</span> <span>{formsControl.name}</span></p>
        <p><span>Email:</span> <span>{formsControl.email}</span></p>
        <p><span>CPF:</span> <span>{formsControl.cpf}</span></p>
        <p><span>Endereço:</span> <span>{formsControl.address}</span></p>
        <p><span>Cidade:</span> <span>{formsControl.city}</span></p>
        <p><span>Estado:</span> <span>{formsControl.state}</span></p>
        <p><span>Moradia:</span> <span>{formsControl.home}</span></p>
        <p><span>Resumo:</span> <span>{formsControl.summary}</span></p>
        <p><span>Cargo:</span> <span>{formsControl.role}</span></p>
        <p><span>Descrição do Cargo:</span> <span>{formsControl.roleDescription}</span></p>
      </article>
    );
  };
}
