 import React from 'react';
 import * as ReactBootstrap from "react-bootstrap"
 import firebase from "./utils/firebaseapp";
 import './values.css';
 
 export default function Val({val}){
      
  const deleted = () => {
          const dbreff = firebase.database().ref("Todo").child(val.i);
          dbreff.remove()
  };
  
    return(
        <div>
          <ReactBootstrap.CardColumns>
          <ReactBootstrap.Card style={{ width: '18rem' }}>
        <ReactBootstrap.Card.Img variant="top" src="logo.svg" />
        <ReactBootstrap.Card.Body>
          <ReactBootstrap.Card.Title>{val.title}</ReactBootstrap.Card.Title>
          <ReactBootstrap.Card.Text>
          {val.price}
          </ReactBootstrap.Card.Text>
          <ReactBootstrap.Button variant="primary" onClick = {deleted}>Remove</ReactBootstrap.Button>
        </ReactBootstrap.Card.Body>
      </ReactBootstrap.Card>

          </ReactBootstrap.CardColumns>
            
              
              
        </div>
        
        
      );
  }
  