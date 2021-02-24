import {
  HANDLE_FORMS_NAME, HANDLE_FORMS_EMAIL, HANDLE_FORMS_CPF,
  HANDLE_FORMS_ADDRESS, HANDLE_FORMS_CITY, HANDLE_FORMS_STATE,
  HANDLE_FORMS_HOME, HANDLE_FORMS_SUMMARY, HANDLE_FORMS_ROLE,
  HANDLE_FORMS_ROLE_DESCRIPTION, HANDLE_FORMS_SHOW_CURRICULUM,
  HANDLE_FORMS_SHOW_ALERT } from '../../Actions/FormsActions';
import { noSpecialChar, cpfMask } from '../../../Services/formsFunctions';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: '',
  home: '',
  summary: '',
  role: '',
  roleDescription: '',
  showAlert: true,
  showCurriculum: false,
}

export default function FormsReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case HANDLE_FORMS_NAME:
      payload.event.target.value = payload.event.target.value.toUpperCase()
      return {
        ...state,
        name: payload.event.target.value,
      };
    case HANDLE_FORMS_EMAIL:
      return {
        ...state,
        email: payload.event.target.value,
      };
    case HANDLE_FORMS_CPF:
      payload.event.target.value = cpfMask(payload.event.target.value)
      return {
        ...state,
        cpf: payload.event.target.value,
      }
    case HANDLE_FORMS_ADDRESS:
      payload.event.target.value = noSpecialChar(payload.event.target.value)
      payload.event.target.value = payload.event.target.value.toUpperCase()
      return {
        ...state,
        address: payload.event.target.value,
      }
    case HANDLE_FORMS_CITY:
      return {
        ...state,
        city: payload.event.target.value,
      };
    case HANDLE_FORMS_STATE:
      return {
        ...state,
        state: payload.event.target.value,
      };
    case HANDLE_FORMS_HOME:
      return {
        ...state,
        home: payload.event.target.value,
      };
    case HANDLE_FORMS_SUMMARY:
      return {
        ...state,
        summary: payload.event.target.value,
      }
    case HANDLE_FORMS_ROLE:
      return {
        ...state,
        role: payload.event.target.value,
      }
    case HANDLE_FORMS_ROLE_DESCRIPTION:
      return {
        ...state,
        roleDescription: payload.event.target.value,
      }
    default:
      return state;
  };
};
