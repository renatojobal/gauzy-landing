import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Download.css';

function Download() {
  return (
    <div className="container-fluid Download__container" >
      <h3>Descargar</h3>
      <p>Nuestra aplicación está actualmente disponible para Android</p>
    </div>
  );
}

export default Download;
