import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector, UseSelector } from "react-redux";

function Header() {
  const listUser = useSelector((state: any) => state.user.listUser);
  return (
    <div>
      <Navbar bg="dark" expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link> */}
              <NavDropdown
                style={{ marginLeft: "50px" }}
                title={`(${listUser.length}) Users `}
                id="basic-nav-dropdown"
              >
                {listUser &&
                  listUser.length > 0 &&
                  listUser.map((user: any) => {
                    return (
                      <NavDropdown.Item key={`user-${user.id}`} href="#">
                        {user.username}
                      </NavDropdown.Item>
                    );
                  })}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
