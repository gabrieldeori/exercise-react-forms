import React, { Component } from 'react';
import { LastJobData, PersonalData, Curriculum } from '../../Components';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCurriculum: false,
    }
    this.flipCurriculum = this.flipCurriculum.bind(this);
  }

  flipCurriculum() {
    this.setState((p) => ({
      showCurriculum: !p.showCurriculum
    }));
  }

  render() {
    const { showCurriculum } = this.state;
    return (
      <div>
        Form With Redux
        <form>
          <PersonalData />
          <LastJobData />
        </form>
        <button
          type="button"
          onClick={this.flipCurriculum}
        >
          Consolidar
        </button>
        <button type="button">Limpar</button>
        {
          showCurriculum === true &&
          <div>
            <Curriculum />
          </div>
        }
      </div>
    );
  };
}
