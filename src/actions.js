import Dispatcher from "./dispatcher";

export const changeInvitados = (value) => {
  const action = {
    type: "CHANGEINVITADOS",
    value
  };
  Dispatcher.dispatch(action);
};

export const changePorciones = (value) => {
  const action = {
    type: "CHANGEPORCIONES",
    value
  };
  Dispatcher.dispatch(action);
};

export const changePicsas = (value) => {
  const action = {
    type: "CHANGEPICSAS",
    value
  };
  Dispatcher.dispatch(action);
};

export const reset = (value) => {
  const action = {
    type: "RESET",
    value
  };
  Dispatcher.dispatch(action);
};
