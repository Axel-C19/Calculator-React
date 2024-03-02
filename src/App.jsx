import "./styles.css";
import DigitButtton from "./DigitButton.jsx";
import OperationButtton from "./OperationButton.jsx";
import { useReducer } from "react";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if(payload.digit === "0" )
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
  }
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {previousOperand}
          {operation}
        </div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <OperationButtton digit="÷" dispatch={dispatch} />
      <DigitButtton digit="1" dispatch={dispatch} />
      <DigitButtton digit="2" dispatch={dispatch} />
      <DigitButtton digit="3" dispatch={dispatch} />
      <OperationButtton digit="*" dispatch={dispatch} />
      <DigitButtton digit="4" dispatch={dispatch} />
      <DigitButtton digit="5" dispatch={dispatch} />
      <DigitButtton digit="6" dispatch={dispatch} />
      <OperationButtton digit="+" dispatch={dispatch} />
      <DigitButtton digit="7" dispatch={dispatch} />
      <DigitButtton digit="8" dispatch={dispatch} />
      <DigitButtton digit="9" dispatch={dispatch} />
      <OperationButtton digit="-" dispatch={dispatch} />
      <button>.</button>
      <button>0</button>
      <button className="span-two">=</button>
    </div>
  );
}

export default App;
