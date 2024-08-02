import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { DiJavascript1, DiReact, DiGit, DiMysql } from 'react-icons/di';
import { SiFirebase, SiSpringboot } from 'react-icons/si';
import { TbBrandNextjs } from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";
function TechStack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <GrGraphQl />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <TbBrandNextjs />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiSpringboot />
      </Col>
    </Row>
  );
}

export default TechStack;
