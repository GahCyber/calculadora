import React, { useState } from "react";
import "../styles/_styles.scss";

export default function App() {
  const [task, setTask] = useState("");  // Armazena a tarefa digitada
  const [tasks, setTasks] = useState([]); // Armazena a lista de tarefas

  const handleAddTask = () => {
    if (task.trim()) { //Remove os espaços do canto
      // Gerar um ID único para cada tarefa
      const newTask = { id: Date.now(), text: task, concluded: false };
      setTasks(prevTasks => [...prevTasks, newTask]);
      setTask(""); // Limpa o campo após adicionar a tarefa
    }
  };

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  // Função para capturar a tecla Enter e adicionar a tarefa
  const handleKeyDown = (tecla) => {
    if (tecla.key === "Enter") {
      handleAddTask();
    }
  };

  // Função para excluir uma tarefa
  const handleDelete = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  // Função para concluir uma tarefa
  const handleConclude = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, concluded: true } : task
      )
    );
  };

  // Ordenar as tarefas para colocar as concluídas no final
  const sortedTasks = tasks.slice().sort((a, b) => a.concluded - b.concluded);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Lista de Tarefas</h1>

      {/* Input para adicionar tarefas */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Digite uma tarefa"
          value={task}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}  // Adicionando o evento de tecla
        />
        <button
          className="btn btn-primary"
          onClick={handleAddTask}
        >
          Adicionar
        </button>
      </div>

      {/* Exibindo as tarefas */}
      <ul className="list-group">
        {sortedTasks.map((task) => (
          <li
            id="li-tarefa"
            key={task.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              task.concluded ? "concluded" : ""
            }`}
          >
            {task.text}
            <div className="d-flex ml-auto">
              <button
                id="btn-deletar"
                className="btn btn-primary"
                onClick={() => handleDelete(task.id)}
              >
                ❌
              </button>
              <button
                id="btn-concluido"
                className="btn btn-primary"
                onClick={() => handleConclude(task.id)}
              >
                ✅
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
