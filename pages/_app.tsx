import React, { useState, useEffect } from 'react';

const App = () => {
  const [input, setInput] = useState(""); // Armazena a expressão digitada

  // Função para lidar com a entrada do usuário
  const handleInput = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  // Função para calcular o resultado
  const handleCalculate = () => {
    try {
      const result = eval(input);  // Calcula o resultado da expressão
      setInput(result.toString()); // Exibe o resultado
    } catch (error) {
      setInput("Erro"); // Exibe "Erro" caso a expressão seja inválida
    }
  };

  // Função para limpar a entrada
  const handleClear = () => {
    setInput(""); // Limpa o campo de entrada
  };

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="input-group mb-3">
            <input
              id="input-conta"
              type="text"
              className="form-control"
              placeholder="0"
              value={input}
              onChange={(evento) => setInput(evento.target.value)}
            />
          </div>

          <div className="row">
            <div className="col-3">
              <button className="btn btn-danger w-100" onClick={handleClear}>
                C
              </button>
            </div>
            {[7, 8, 9].map((num) => (
              <div className="col-3" key={num}>
                <button
                  className="btn btn-light w-100"
                  onClick={() => handleInput(num.toString())}
                >
                  {num}
                </button>
              </div>
            ))}
            <div className="col-3">
              <button className="btn btn-warning w-100" onClick={() => handleInput("/")}>
                /
              </button>
            </div>
          </div>

          {/* Mais botões, etc. */}
          <div className="row">
            <div className="col-3">
              <button className="btn btn-light w-100" onClick={() => handleInput("1")}>
                1
              </button>
            </div>
            {/* Outros botões */}
            <div className="col-3">
              <button className="btn btn-success w-100" onClick={handleCalculate}>
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
