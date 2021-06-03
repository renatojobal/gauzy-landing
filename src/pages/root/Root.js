import React from "react";

import Home from '../../components/home/Home'
import Contribute from '../../components/contribute/Contribute'
import Download from '../../components/download/Download'
import Mission from '../../components/mission/Mission'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'




function Root() {

    return (
      <body>
   
        <Home />
        <Download />
        <Mission />
        <Contribute />
        <Footer />
      </body>
    );
  
}

export default Root;
