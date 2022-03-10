import React from "react";
import spinner from "../img/spinner.gif";

const Spiner = () => {
  return (
    <div className="center">
      <img src={spinner} alt="Cargando..." className="spinner" />
    </div>
  );
};

export default Spiner;
