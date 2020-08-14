import React from "react";
import "./styles.css";
import ContadorPicsas from "./store";
import * as actions from "./actions";

const App = () => (
  <main className="Application">
    <section className="pizzas">
      <WithPizzasCounted className="pizza-container" />
    </section>
  </main>
);

export default App;

const WithCalculator = (Component) =>
  class extends React.Component {
    state = ContadorPicsas.getGlobalState();
    updateState = () => {
      this.setState(ContadorPicsas.getGlobalState());
    };
    componentDidMount() {
      ContadorPicsas.on("change", this.updateState);
    }
    componentDidUpdate() {}
    componentWillUnmount() {
      ContadorPicsas.off("change", this.updateState);
    }
    handleChangeInvitades = (e) => {
      actions.changeInvitados(e.target.value);
    };

    handleChangePorciones = (e) => {
      actions.changePorciones(e.target.value);
    };

    handleReset = () => {
      actions.reset();
    };

    calculatePizzas = () => {
      const { invitades, porciones } = this.state;
      return Math.ceil((invitades * porciones) / 8);
    };

    render() {
      const { invitades, porciones } = this.state;
      return (
        <div className="pizza-container">
          <Component
            inputInvitades={invitades}
            onChangeInvitades={this.handleChangeInvitades}
            inputPorciones={porciones}
            onChangePorciones={this.handleChangePorciones}
            pizzaCount={this.calculatePizzas()}
            onReset={this.handleReset}
          />
        </div>
      );
    }
  };

const CounterPizzas = (props) => {
  const {
    inputInvitades,
    onChangeInvitades,
    inputPorciones,
    onChangePorciones,
    pizzaCount,
    onReset
  } = props;

  return (
    <div className="counterPizzas">
      <input
        type="number"
        label="Invitad@s"
        value={inputInvitades}
        onChange={onChangeInvitades}
      />{" "}
      Invitad@s{" "}
      <input
        type="number"
        label="Porciones"
        value={inputPorciones}
        onChange={onChangePorciones}
      />{" "}
      Porciones por persona <p>Necesitarían {pizzaCount} pizzas </p>
      <button onClick={onReset}>Reset</button>
      {/* <span>{props.pizzas}</span> */}
    </div>
  );
};

const WithPizzasCounted = WithCalculator(CounterPizzas);
