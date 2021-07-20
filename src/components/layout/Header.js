import { useEffect } from "react";

//    REDUX
import { connect } from "react-redux";
import { authUser, logOut } from "../../actions/authAction";

const Header = ({ authState, authUser, logOut }) => {
  const { user } = authState;

  useEffect(() => {
    authUser();
  }, [authUser]);

  return (
    <header className="app-header">
      {user ? (
        <p className="nombre-usuario">
          Hola! <span>{user.name}</span>
        </p>
      ) : null}
      <nav className="nav-principal">
        <button 
          className="btn btn-blank cerrar-sesion"
          onClick={() => logOut()}
        >
          Cerrar Sesión
        </button>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => ({
  authState: state.authState,
});

const mapDispatchToProps = {
  authUser,
  logOut
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
