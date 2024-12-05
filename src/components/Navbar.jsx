import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function ColorSchemesExample() {

    // get the admin surname from the local storage 
    // we will retrive the admin username from the local storage 
  
    const admin_surname = localStorage.getItem("surname")
    const handlelogoutFunction = () =>{
      // we will clear the local storage to the authenticated user 
      localStorage.removeItem("surname")
    }



  return (
    
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">CDFAPP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/checkbalance">Check Balannce</Nav.Link>
            <Nav.Link href="/payment">Payment</Nav.Link>
            <Nav.Link href="">Welcome, {admin_surname}</Nav.Link>
            <Nav.Link href="" onClick={handlelogoutFunction}>Logout</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>

  );
}

export default ColorSchemesExample;