import React, { useState } from "react";
import { Link } from "react-router-dom";


export const Login = () => {
  const [credentials, setCredentiasl] = useState({
    email: "",
    password: "",
  });

  //    Handle Events   -------------->
  const handleInputChange = (e) => {
    setCredentiasl({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    //    Validation

    //    Action
  };

  const { email, password } = credentials; //    End Handle Events

  return (
    <div className="form-usuario">
      <div className="contenedor-form">
        <h1>Iniciar Sesion</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Ingresa tu email..."
              onChange={handleInputChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Ingresa tu contraseña..."
              onChange={handleInputChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesion"
            />
          </div>
        </form>
        <Link to="/new-account" className="enlace-cuenta">Registrate</Link>
      </div>
    </div> 
  );
};
