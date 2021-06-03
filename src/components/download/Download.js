import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { RoundedButton } from "../styles";

function Download() {
  return (
    <div className="container-fluid Download__container" >
      <buttontext className="buttontext">Descargar</buttontext>
      <p>Nuestra aplicación está actualmente disponible para Android</p>
      <RoundedButton > Hola </RoundedButton>
    </div>
  );
}

export default Download;
