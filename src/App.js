import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

//personal imports
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // title and links for navbar.
      //content for titles of contact pages
      title: "Dillon Smith",
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'contact', path: '/contact'}
      ],
      home: {
        title: 'There is beauty in productivity',
        subTitle: 'Practice makes perfect',
        text: 'My Projects:'
      },
      about: {
        title: 'About me',
      },
      contact: {
        title: 'Contact me',
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-1" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Dillon Smith</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ms-auto" >
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>

          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTtitle={this.state.home.subTitle} text={this.state.home.text}/>} />
          <Route path="/about" render={() => <About title={this.state.about.title}/>} />
          <Route path="/contact" render={() => <Contact title={this.state.contact.title}/>} />

          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
