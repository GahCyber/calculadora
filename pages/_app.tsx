import React, { useState } from "react";
import "../styles/_styles.scss";

export default function App() {
  const [input, setInput] = useState(""); // Armazena a expressão digitada

  // Função para lidar com a entrada do usuário
  const handleInput = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Função para calcular o resultado
  const handleCalculate = () => {
    try {
      // Avalia a expressão usando a função eval
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Erro");
    }
  };

  // Função para limpar o input
  const handleClear = () => {
    setInput("");
  };

  // Função para capturar a tecla Enter e calcular o resultado
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCalculate();
    }
  };

  return (
    <div id="all">
      <div id="campo-numero">
        <input
          id="input-conta"
          type="text"
          className="form-control"
          placeholder="0"
          value={input}
          onChange={(evento) => setInput(evento.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <hr id="linha" />
      <div id="nmb-C">
        <button id="C" onClick={handleClear}>
          C
        </button>
        {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((num) => (
          <button key={num} onClick={() => handleInput(num.toString())}>
            {num}
          </button>
        ))}
        {["+", "-", "*", "/"].map((operator) => (
          <button key={operator} onClick={() => handleInput(operator)}>
            {operator}
          </button>
        ))}
        <button onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
}
