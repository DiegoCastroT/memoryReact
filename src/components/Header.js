import React from "react";

const Header = ({ reiniciarJuego }) => {
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4CAF50",
    padding: "10px",
    color: "white",
    fontSize: "24px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    borderRadius: "5px",
  };

  return (
    <header style={headerStyle}>
      <h1>Memory Game</h1>
      <button style={buttonStyle} onClick={reiniciarJuego}>
        Reiniciar
      </button>
    </header>
  );
};

export default Header;