import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { withTranslation } from "react-i18next";


class Header extends React.Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
    };
    this.resizeHandler = this.resizeHandler.bind(this);
  }

  resizeHandler() {
    const height = this.header.clientHeight;
    this.setState({ height });
    this.props.onHeightChange(height);
  }

  componentDidMount() {
    this.resizeHandler();
    window.addEventListener("resize", this.resizeHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeHandler);
  }

  logoutHandler = () => {
    // console.log("logging out from header");
    this.context.logout();
  };

  render() {
    let { isLoggedIn, userName } = this.context;
    const { t, } = this.props;

    return (
      <Container
        fluid
        className="fixed-top border-bottom text-center bg-white boxShadow"
        ref={(header) => {
          this.header = header;
        }}
      >
        <Navbar bg="white" expand="sm">
          <Container fluid>
            <img alt="CECATI" width="40px" src="http://www.cecati-125.edu.mx/assets/cecati125-logo-a79973b0.png"/>  
            <Navbar.Brand to="/" as={NavLink}>
              {t("CECATI")}
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              {isLoggedIn && (
                <Nav className="d-flex w-100">
                  <Link
                    className="me-auto button btn btn-outline-secondary ms-1 my-2 text-decoration-none"
                    to="/new-post"
                    as={NavLink}
                  >
                    {t("Nueva Noticia")}
                  </Link>
                  <div
                    className="btn align-self-center text-secondary"
                    style={{ cursor: "default" }}
                  >
                    <span>{`${t("Usuario")}:  ${userName}`}</span>
                  </div>
                  <Link
                    className="button btn btn-outline-secondary me-1 my-2 text-decoration-none"
                    to="/"
                    as={NavLink}
                    onClick={this.logoutHandler}
                  >
                    {t("Cerrar Sesión")}
                  </Link>
                </Nav>
              )}

              {!isLoggedIn && (
                <Nav className="d-flex w-100 justify-content-end">
                  <Link
                    className="button btn btn-outline-secondary me-1 my-1 text-decoration-none"
                    to="/login"
                    as={NavLink}
                  >
                    {t("Iniciar Sesión")}
                  </Link>
                  <Link
                    className="button btn btn-outline-secondary me-1 my-1 text-decoration-none"
                    to="/register"
                    as={NavLink}
                  >
                    {t("Registrarse")}
                  </Link>
                </Nav>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    );
  }
}

export default withTranslation()(Header);
