import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  
  const keys = [
    ["3", "9"], ["0", "5"], ["2", "8"],
    ["1", "4"], ["6", "7"], ["⌫"]
  ];

  const handleKeyPress = (value:string) => {
    if (value === "⌫") {
      setInputValue(inputValue.slice(0, -1));
    } else {
      setInputValue(inputValue + value);
    }
  };

  return (
    <div className="container" >
      <h2>Teclado Virtual</h2>
      <input type="password" value={inputValue} readOnly className="input" />
      <div className="keyboard">
        {keys.map((pair, index) => (
          <button key={index} onClick={() => handleKeyPress(pair[0])} className="key">
            {pair[0]} ou {pair[1]}
          </button>
        ))}
        <button onClick={() => handleKeyPress("⌫")} className="key delete">⌫</button>
      </div>
      <button className="access">Acessar</button>
    </div>
  );
}

export default App;
