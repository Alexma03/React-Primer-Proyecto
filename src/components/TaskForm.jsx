import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm({}) {
  const [titulo, setTitulo] = useState("");

  const { createTask } = useContext(TaskContext);

  function handleSubmit(e) {
    e.preventDefault();
    createTask(titulo);
    setTitulo("");
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-zinc-500 p-10 mb-4">
        <input
          type="text"
          placeholder="Titulo Tarea"
          value={titulo}
          className="w-full bg-gray-800 p-2 rounded-md mb-4"
          onChange={(e) => {
            setTitulo(e.target.value);
          }}
        />
        <button className="w-fit bg-gray-700 p-2 rounded-md">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
