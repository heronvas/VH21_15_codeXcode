//import logo from './logo.svg';
import './App.css';
import './lists.css';
import React, {useState} from 'react';
import * as ReactBootstrap from "react-bootstrap"
import List from "./List"; 

function App(){
  const [title, setTitle] = useState('');
  return (
    <div class = "app">
      <ReactBootstrap.Navbar bg="light" variant="light">
    <ReactBootstrap.Navbar.Brand href="#home">Navbar</ReactBootstrap.Navbar.Brand>
    <ReactBootstrap.Nav className="mr-auto">
      <ReactBootstrap.Nav.Link href="#home">Home</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#features">Features</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#pricing">Pricing</ReactBootstrap.Nav.Link>
    </ReactBootstrap.Nav>
    <ReactBootstrap.Form inline>
      <ReactBootstrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <ReactBootstrap.Button variant="outline-primary">Search</ReactBootstrap.Button>
    </ReactBootstrap.Form>
  </ReactBootstrap.Navbar>

    <div class = "top">
      <form id = "todo" onSubmit = {this.addItem}>
        <input type = "text" placeholder = "enter" value = {this.state.currentItem.text} onChange = {this.handleInput}></input>
        <button type = "submit">Add</button>
      </form>
      </div>

      <List items = {this.state.items}></List>

  </div>
    
  );
}



export default App;
