import React, { useState, useEffect } from "react";
//    RRD
import { Link } from "react-router-dom";

//    REDUX
import { connect } from "react-redux";
//    Actions
import { logIn } from "../../actions/authAction";
import { showAlert } from "../../actions/alertAction";

const Login = ({ alertState, authState, logIn, showAlert, history }) => {

  //State
  const [credentials, setCredentiasl] = useState({
    email: "",
    password: "",
  });

  //  Destructuring
  const { alert } = alertState;
  const { msg, auth } = authState;
  const { email, password } = credentials;

  //    auth user or auth error
  useEffect(() => {
    if (auth) history.push("/projects");
    if (msg) showAlert(msg.msg, msg.category);
  }, [msg, auth]);

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
    if (email.trim() === "" || password.trim() === "") {
      showAlert("Todos los campos son obligatorios", "alerta-error");
      return;
    }

    //    Action
    logIn({ email, password });
  };                                              //    End Handle Events      
   

  return (
    <div className="form-usuario">
      {alert ? (
        <div className={`alerta ${alert.category}`}>{alert.msg}</div>
      ) : null}
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
        <Link to="/new-account" className="enlace-cuenta">
          Registrate
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    alertState: state.alertState,
    authState: state.authState,
  };
};

const mapDispatchToProps = {
  logIn,
  showAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
