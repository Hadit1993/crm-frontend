import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/img/logo.png";

function Header() {
  return (
    <Navbar
      style={{ paddingLeft: 16, paddingRight: 16 }}
      collapseOnSelect
      bg="info"
      variant="dark"
      expand="md"
    >
      <Navbar.Brand>
        <img src={logo} alt="logo" width={50} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ marginLeft: "auto" }}>
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/ticket">Ticket</Nav.Link>
          <Nav.Link href="/logout">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
