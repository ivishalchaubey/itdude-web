import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import '../../App.css'

function WebNavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className='bg-gradient p-2'>
      <Container >
        <Navbar.Brand><NavLink className='navitem' to='/'>
          <img
            src="https://yt3.googleusercontent.com/ytc/AMLnZu8RvTjTvjB8769_yz72lOfIQaDGRlTHhWvazjuB=s88-c-k-c0x00ffffff-no-rj"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="ITdude Logo"
          />
        </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link ><NavLink className='navitem' to='/'>Home</NavLink></Nav.Link>
            <Nav.Link ><NavLink className='navitem' to='/courses'>Courses</NavLink></Nav.Link>
            <Nav.Link ><NavLink className='navitem' to='/aboutus'>About Us</NavLink></Nav.Link>
            <Nav.Link ><NavLink className='navitem' to='/contectus'>Contect</NavLink></Nav.Link>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default WebNavBar;