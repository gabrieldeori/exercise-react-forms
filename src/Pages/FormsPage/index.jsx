import React, { Component } from 'react';
import { LastJobData, PersonalData, Curriculum } from '../../Components';

export default class index extends Component {
  render() {
    return (
      <div>
        Form With Redux
        <form>
          <PersonalData />
          <LastJobData />
        </form>
        <button
          type="button"
        >
          Consolidar
        </button>
        <button type="button">Limpar</button>
        {
          true &&
          <div>
            <Curriculum />
          </div>
        }
      </div>
    );
  };
}
