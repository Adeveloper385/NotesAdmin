import React, { useState } from "react";
import { Link } from "react-router-dom";

export const NewAccount = () => {
  const [credentials, setCredentiasl] = useState({
    name:"",
    email: "",
    password: "",
    confirmPassword: "",
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

    //    Min Password 6

    //    Passwords are equal

    //    Action
  };

  const { name, email, password, confirmPassword } = credentials; //    End Handle Events

  return (
    <div className="form-usuario">
      <div className="contenedor-form">
        <h1>Crear Cuenta</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="campo-form">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              placeholder="Ingresa tu nombre"
              onChange={handleInputChange}
            />
          </div>
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
            <label htmlFor="password">Password</label>
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
            <label htmlFor="confirmPassword">Confirmar Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              placeholder="Repite tu contraseña..."
              onChange={handleInputChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarme"
            />
          </div>
        </form>
        <Link to="/" className="enlace-cuenta">
          Iniciar Sesión
        </Link>
      </div>
    </div>
  );
};
