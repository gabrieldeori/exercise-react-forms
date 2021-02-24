import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LastJobData, PersonalData, Curriculum } from '../../Components';
import { handleFormsClear } from '../../Redux/Actions/FormsActions';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCurriculum: false,
    }
  }

  render() {
    const { formsClear } = this.props;
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
          onClick={() => this.setState({ showCurriculum: true })}
        >
          Consolidar
        </button>
        <button
          type="button"
          onClick={formsClear}
        >
          Limpar
        </button>
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

function mapDispatchToProps(dispatch) {
  return {
    formsClear: () => dispatch(handleFormsClear()),
  }
}

export default connect(null, mapDispatchToProps)(index)
