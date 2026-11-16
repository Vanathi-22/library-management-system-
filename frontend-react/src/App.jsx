import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>📚 Library Management System</h1>

      <nav>
        <button>Dashboard</button>
        <button>Books</button>
        <button>Students</button>
        <button>Issue Books</button>
        <button>Return Books</button>
      </nav>

      <h2>Welcome to Library</h2>

      <div className="cards">
        <div className="card">
          <h3>Total Books</h3>
          <h2>500</h2>
        </div>

        <div className="card">
          <h3>Total Students</h3>
          <h2>100</h2>
        </div>

        <div className="card">
          <h3>Issued Books</h3>
          <h2>50</h2>
        </div>
      </div>
    </div>
  );
}

export default App;          
