import React, { useState } from 'react';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`container ${darkMode ? 'dark' : 'light'}`}>
      <h1>Meu Título</h1>
      <p>Esse é um texto de exemplo para mostrar o modo {darkMode ? 'Escuro' : 'Claro'}.</p>
      <img
        src="https://via.placeholder.com/300"
        alt="Imagem de exemplo"
        style={{ borderRadius: '8px' }}
      />
      <br />
      <button onClick={() => setDarkMode(!darkMode)}>
        Ativar Modo {darkMode ? 'Claro' : 'Escuro'}
      </button>
    </div>
  );
}

export default App;
