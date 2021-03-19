//import logo from './logo.svg';
import './App.css';
import './lists.css';
import React, {useState} from 'react';
import * as ReactBootstrap from "react-bootstrap"
import firebase from "./utils/firebaseapp";
import List from "./List";
 

export default function App(){
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const handleOnChange = (e) => {
    setTitle(e.target.value);
    
  };

  const handleOnPrice = (e) =>{
    setPrice(e.target.value)
  }

  const create = () => {
    const dbref = firebase.database().ref('Todo');
    
    const todo = {
      title,
      price,
      complete:false
    };
    dbref.push(todo);
    
  };


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
      <div id = "todo" >
        <input type = "text" placeholder = "enter" value = {title} onChange = {handleOnChange}></input>
        <input type = "text" placeholder = "enter" value = {price} onChange = {handleOnPrice}></input>
        <button  onClick = {create}>Add</button>
      </div>
      </div>


    <List/>
      
  </div>
    
  );
}




