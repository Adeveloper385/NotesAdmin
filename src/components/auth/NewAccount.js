import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { showAlert } from "../../actions/alertAction";
import { registerUser } from "../../actions/authAction";

const NewAccount = ({ alertState, authState, showAlert, registerUser, history }) => {

  //    State
  const [credentials, setCredentiasl] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //    Destructuring
  const { alert } = alertState;
  const { msg , auth } = authState
  const { name, email, password, confirmPassword } = credentials;


  //    if User get Auth or bad Request
  useEffect( () => {
    if(auth) history.push('/projects')
    if(msg) showAlert(msg.msg, msg.category)
    
  },[msg, auth, history, showAlert])

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
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      showAlert("Todos los campos son obligatorios", "alerta-error");
      return;
    }
    //    Min Password 6
    if(password.length < 6){
      showAlert('La contraseña debe tener mas de 5 caracteres', 'alerta-error')
      return;
    } 
    //    Passwords are equal
    if(password !== confirmPassword){
      showAlert('Las constraseñas no coinciden', 'alerta-error')
      return;
    }
    //    Action
    registerUser({name, email, password})
  };                                       //    End Handle Events
   

   
  return (
    <div className="form-usuario">
      {alert ? (
        <div className={`alerta ${alert.category}`}>{alert.msg}</div>
      ) : null}
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

const mapStateToProps = (state) => {
  return {
    alertState: state.alertState,
    authState: state.authState
  };
};

const mapDispatchToProps = {
  showAlert,
  registerUser
}

export default connect(mapStateToProps, mapDispatchToProps)(NewAccount);
