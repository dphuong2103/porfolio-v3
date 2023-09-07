import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { DiJavascript1, DiReact, DiGit, DiMysql } from 'react-icons/di';
import { SiFirebase, SiFlutter, SiDotnet } from 'react-icons/si';

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
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiFlutter />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiDotnet />
      </Col>
    </Row>
  );
}

export default TechStack;
