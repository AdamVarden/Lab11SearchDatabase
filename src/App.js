import React from 'react';
import './App.css';

import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import Create from './components/create';
import Read from './components/read';
import Edit from './components/edit';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>

        <div className="App">

          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>


          <Switch>
            <Route exact path="/" component={Content} />
            <Route path="/read" component={Read} />
            <Route path="/create" component={Create} /> 
            <Route path = "/edit/:id" component={Edit}/>
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}
export default App;
