import { Container, Navbar, Nav } from "react-bootstrap"

const MyNav = function () {
  return (
    <Navbar collapseOnSelect expand="lg" className="testColor">
      <Container fluid>
        <Navbar.Brand href="#home" className="pe-0 me-0">
          <em>The Library</em>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNav
