import { Nav, Container, Navbar } from "react-bootstrap";
import logo from "../../assets/logoRecetas.png";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="logo Rolling Cocina"
            className="img-fluid"
            width={100}
          />
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <NavLink end className="nav-link" to="/">
              Inicio
            </NavLink>
            <NavLink end className="nav-link" to="/administrador">
              Administrador
            </NavLink>
            <NavLink end className="nav-link" to="/login">
              Login
            </NavLink>
            <NavLink end className="nav-link" to="/registro">
              Registro
            </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Menu;