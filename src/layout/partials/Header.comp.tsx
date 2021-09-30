import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/img/logo.png";

function Header() {
  const history = useHistory();

  const logout = () => history.push("/");

  return (
    <Navbar
      style={{ paddingLeft: 16, paddingRight: 16, zIndex: 15 }}
      collapseOnSelect
      bg="info"
      variant="dark"
      expand="md"
    >
      <Navbar.Brand>
        <img src={logo} alt="logo" width={50} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-navto">
        <Nav style={{ marginLeft: "auto" }}>
          <LinkContainer to="/dashboard">
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/tickets">
            <Nav.Link>Tickets</Nav.Link>
          </LinkContainer>

          <Nav.Link onClick={logout}>Logout</Nav.Link>

          {/* <Link to="/dashboard">Dashboard</Link>
          <Link to="/tickets">Tickets</Link>
          <Link to="">Logout</Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
