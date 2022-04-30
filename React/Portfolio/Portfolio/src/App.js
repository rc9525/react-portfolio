import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import About from './components/About';
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import { useState } from "react";

function App() {

  // const currentPage = "Contact";
  const [currentPage, setCurrentPage] = useState("About");

  function renderSelected() {
    if(currentPage == "About") {
      return <About />
    } else if (currentPage == "Contact") {
      return <Contact />
    } else if (currentPage == "Portfolio") {
      return <Portfolio />
    }
  }


  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Ronald Chen</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#" onClick={() => {
              setCurrentPage("About")
            }}>About Me</Nav.Link>

            <Nav.Link href="#" onClick={() => {
              setCurrentPage("Portfolio")
             }}> Portfolio</Nav.Link>
            <Nav.Link href="#" onClick={() => {
              setCurrentPage("Contact")
            }}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {
        renderSelected()
      }

      <footer class="bg-dark text-center text-white">
        <div class="container p-4">
          <section class="mb-4 d-flex justify-content-around">
         
            <p>Link to Github https://github.com/rc9525</p>
            <p>Contact Number 123-456-7895</p>
            <p>Email address  123@gmail.com</p>
        
         
          </section>
        </div>
      </footer>
    </div>
  );
}

export default App;
