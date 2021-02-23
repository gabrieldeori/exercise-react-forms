const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: 'Amapá',
  home: '',
  summary: '',
  role: '',
  roleDescription: '',
  showAlert: true,
  showCurriculum: false,
}

export default function FormsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}