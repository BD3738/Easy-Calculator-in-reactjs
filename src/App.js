import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const ops = ["/", "*", "+", "-", "."];

  const chooseValue = (val) => {
    if (ops.includes(val) && ops.includes(value.slice(-1))) {
      return;
    }

    setValue(value + val);
    if (value[value.length - 1] === "=") {
      if (/[0-9.]/.test(val)) {
        setValue(val);
      } else {
        setValue(result + val);
      }
    }
  };

  const equal = () => {
    setResult(eval(value).toString());
    setValue(value + "=");
  };

  const remove = () => {
    const r = value.slice(0, -1);
    setValue(r);
  };

  const chooseRemove = () => {
    setValue("");
  };
  return (
    <div className="App">
      <div className="box">
        <div className="row">{value}</div>
        <div className="row">{result}</div>
        <div className="row">
          <div className="square" value={"/"} onClick={() => chooseValue("/")}>
            /
          </div>
          <div className="square" value={"*"} onClick={() => chooseValue("*")}>
            *
          </div>
          <div className="square" value={"+"} onClick={() => chooseValue("+")}>
            +
          </div>
          <div className="square" value={"-"} onClick={() => chooseValue("-")}>
            -
          </div>
        </div>
        <div className="row">
          <div className="square" value={1} onClick={() => chooseValue("1")}>
            1
          </div>
          <div className="square" value={2} onClick={() => chooseValue("2")}>
            2
          </div>
          <div className="square" value={3} onClick={() => chooseValue("3")}>
            3
          </div>
          <div className="square" value={"AC"} onClick={() => chooseRemove()}>
            AC
          </div>
        </div>
        <div className="row">
          <div className="square" value={4} onClick={() => chooseValue("4")}>
            4
          </div>
          <div className="square" value={5} onClick={() => chooseValue("5")}>
            5
          </div>
          <div className="square" value={6} onClick={() => chooseValue("6")}>
            6
          </div>
          <div className="square" value={"."} onClick={() => chooseValue(".")}>
            .
          </div>
        </div>
        <div className="row">
          <div className="square" value={7} onClick={() => chooseValue("7")}>
            7
          </div>
          <div className="square" value={8} onClick={() => chooseValue("8")}>
            8
          </div>
          <div className="square" value={9} onClick={() => chooseValue("9")}>
            9
          </div>
          <div className="square" value={0} onClick={() => chooseValue("0")}>
            0
          </div>
        </div>
        <div className="row">
          <div className="square" onClick={() => equal()}>
            =
          </div>
          <div className="square" onClick={() => remove()}>
            R
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
