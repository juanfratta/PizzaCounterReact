import EventEmitter from "events";
import Dispatcher from "./dispatcher";

const initialState = {
  invitades: 0,
  porciones: 0
};

let store = {
  ...initialState
};

class ContadorPicsas extends EventEmitter {
  constructor() {
    super();
    Dispatcher.register((action) => {
      if (action.type === "CHANGEINVITADOS") {
        store.invitades = action.value;
        this.emit("change");
      }
      if (action.type === "CHANGEPORCIONES") {
        store.porciones = action.value;
        this.emit("change");
      }

      if (action.type === "RESET") {
        store = { ...initialState };
        this.emit("change");
      }
    });
  }

  getGlobalState = () => {
    return store;
  };
}

export default new ContadorPicsas();
