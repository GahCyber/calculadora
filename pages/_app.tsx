import React, { useState, useEffect } from "react";

const App = () => {
  const [input, setInput] = useState(""); // Armazena a expressão digitada

  // Função para lidar com a entrada do usuário
  const handleInput = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  // Função para calcular o resultado
  const handleCalculate = () => {
    try {
      // Substitui 'log' por 'Math.log' para calcular logaritmos
      const result = eval(input.replace(/log/g, "Math.log"));
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
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCalculate();
    }
  };

  // Adicionando o link do Bootstrap no head dinamicamente
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css";
    link.integrity =
      "sha384-KyZXEJ6vS7OeDTKJmQnmntCqt5p9dy2MVEkVhmVwD5j/wG9xUFEF9L2yql5B+XaN";
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link); // Limpa o link ao desmontar o componente
    };
  }, []);

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
              onKeyDown={handleKeyDown}
              aria-label="Calculadora"
              aria-describedby="basic-addon2"
            />
          </div>

          {/* Linha para os botões */}
          <div className="row mb-2">
            <div className="col-3">
              <button className="btn btn-danger w-100" onClick={handleClear}>
                C
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-secondary w-100" onClick={() => handleInput("(")}>
                (
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-secondary w-100" onClick={() => handleInput(")")}>
                )
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-info w-100" onClick={() => handleInput("log(")}>
                log
              </button>
            </div>
          </div>

          {/* Linha com números e divisão */}
          <div className="row mb-2">
            {[7, 8, 9].map((num) => (
              <div className="col-4" key={num}>
                <button className="btn btn-light w-100" onClick={() => handleInput(num.toString())}>
                  {num}
                </button>
              </div>
            ))}
            <div className="col-4">
              <button className="btn btn-warning w-100" onClick={() => handleInput("/")}>
                /
              </button>
            </div>
          </div>

          {/* Linha com mais números e multiplicação */}
          <div className="row mb-2">
            {[4, 5, 6].map((num) => (
              <div className="col-4" key={num}>
                <button className="btn btn-light w-100" onClick={() => handleInput(num.toString())}>
                  {num}
                </button>
              </div>
            ))}
            <div className="col-4">
              <button className="btn btn-warning w-100" onClick={() => handleInput("*")}>
                *
              </button>
            </div>
          </div>

          {/* Linha com os últimos números e subtração */}
          <div className="row mb-2">
            {[1, 2, 3].map((num) => (
              <div className="col-4" key={num}>
                <button className="btn btn-light w-100" onClick={() => handleInput(num.toString())}>
                  {num}
                </button>
              </div>
            ))}
            <div className="col-4">
              <button className="btn btn-warning w-100" onClick={() => handleInput("-")}>
                -
              </button>
            </div>
          </div>

          {/* Linha para o 0 e adição */}
          <div className="row mb-2">
            <div className="col-8">
              <button className="btn btn-light w-100" onClick={() => handleInput("0")}>
                0
              </button>
            </div>
            <div className="col-4">
              <button className="btn btn-warning w-100" onClick={() => handleInput("+")}>
                +
              </button>
            </div>
          </div>

          {/* Linha com o botão de resultado */}
          <div className="row">
            <div className="col-12">
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
