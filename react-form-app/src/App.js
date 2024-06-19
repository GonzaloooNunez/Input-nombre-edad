import React, { useState } from "react";

function App() {
  // Estado para almacenar el nombre y la edad
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // Estado para almacenar los datos que se mostrarán
  const [displayData, setDisplayData] = useState({ name: "", age: "" });

  // Manejador para el cambio de los inputs
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  // Manejador para el clic del botón
  const handleClick = () => {
    setDisplayData({ name: name, age: age });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Formulario de Usuario</h1>
      <div>
        <label>
          Nombre:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
      </div>
      <div>
        <label>
          Edad:
          <input type="text" value={age} onChange={handleAgeChange} />
        </label>
      </div>
      <button onClick={handleClick}>Mostrar Datos</button>
      {displayData.name && displayData.age && (
        <p>
          Nombre: {displayData.name}, Edad: {displayData.age}
        </p>
      )}
    </div>
  );
}

export default App;
