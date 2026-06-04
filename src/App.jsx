import Button from 'react-bootstrap/Button';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from './page/Home';
import Menu from './page/Menu';


{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
     <Navbar expand="lg" className="bg-black text-white">
      <Container fluid>
        <Navbar.Brand href="#" className="text-white">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
          </Nav>
          <Form className="d-flex text-gray gap-4 mr-2">
             
              <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
          
            <Nav.Link href="#" disabled>
              Chart
            </Nav.Link>
          </Form>
          
        </Navbar.Collapse>
      </Container>
      
    </Navbar>

   <BrowserRouter>
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/menu" element={<Menu />} />
   </Routes>
   </BrowserRouter> 
    </>
  )
}

export default App