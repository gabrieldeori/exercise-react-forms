export const HANDLE_FORMS_NAME = 'HANDLE_FORMS_NAME';
export const HANDLE_FORMS_EMAIL = 'HANDLE_FORMS_EMAIL';
export const HANDLE_FORMS_CPF = 'HANDLE_FORMS_CPF';
export const HANDLE_FORMS_ADDRESS = 'HANDLE_FORMS_ADDRESS';
export const HANDLE_FORMS_CITY = 'HANDLE_FORMS_CITY';
export const HANDLE_FORMS_STATE = 'HANDLE_FORMS_STATE';
export const HANDLE_FORMS_HOME = 'HANDLE_FORMS_HOME';
export const HANDLE_FORMS_SUMMARY = 'HANDLE_FORMS_SUMMARY';
export const HANDLE_FORMS_ROLE = 'HANDLE_FORMS_ROLE';
export const HANDLE_FORMS_ROLE_DESCRIPTION = 'HANDLE_FORMS_ROLE_DESCRIPTION';
export const HANDLE_FORMS_SHOW_ALERT = 'SHOW_ALERT';
export const HANDLE_FORMS_SHOW_CURRICULUM = 'SHOW_CURRICULUM';

export function handleFormsName(event) {
  event.target.value = event.target.value.toUpperCase();
  return {
    type: HANDLE_FORMS_NAME,
    payload: {
      event,
    },
  };
}

export function handleFormsEmail(event) {
  return {
    type: HANDLE_FORMS_EMAIL,
    payload: {
      event,
    },
  };
}

export function handleFormsCpf(event) {
  return {
    type: HANDLE_FORMS_CPF,
    payload: {
      event,
    },
  };
}

export function handleFormsAddress(event) {
  return {
    type: HANDLE_FORMS_ADDRESS,
    payload: {
      event,
    },
  };
}

export function handleFormsCity(event) {
  return {
    type: HANDLE_FORMS_CITY,
    payload: {
      event,
    },
  };
}

export function handleFormsState(event) {
  return {
    type: HANDLE_FORMS_STATE,
    payload: {
      event,
    },
  };
}

export function handleFormsHome(event) {
  return {
    type: HANDLE_FORMS_HOME,
    payload: {
      event,
    },
  };
}

export function handleFormsSummary(event) {
  return {
    type: HANDLE_FORMS_SUMMARY,
    payload: {
      event,
    },
  };
}

export function handleFormsRole(event) {
  return {
    type: HANDLE_FORMS_ROLE,
    payload: {
      event,
    },
  };
}

export function handleFormsRoleDescription(event) {
  return {
    type: HANDLE_FORMS_ROLE_DESCRIPTION,
    payload: {
      event,
    },
  };
}
