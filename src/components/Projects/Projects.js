import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import timelessLove from '../../Assets/Projects/timelesslove.png';
import workoutTracker from '../../Assets/Projects/workouttracker.png';
import timer from '../../Assets/Projects/timer.png';
import countdownIcon from '../../Assets/Projects/countdown.png';
import evChargingStationIcon from "../../Assets/Projects/ev-charging-station.png";
import blogIcon from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={evChargingStationIcon}
              isBlog={false}
              title="EV Charger Management"
              description='Develop and manage the Admin Page for charger management for electric vehicles in Hong Kong and Thailand, including CRUD operations and analytics, reporting using NextJs'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={blogIcon}
              isBlog={false}
              title='Blog'
              description='A secure, responsive blog platform with JWT authentication, dynamic content management, MDX support, and enhanced user experience features like search functionality and dark mode.'
              ghLink='https://github.com/dphuong2103/blog'
              demoLink='https://blog.phuongtran.site/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={timelessLove}
              isBlog={false}
              title='Timeless Love'
              description='An app for couples to store their dating information and memories'
              ghLink='https://github.com/dphuong2103/timelesslove'
              demoLink='https://play.google.com/store/apps/details?id=com.midouz.timeless_love_app&hl=vi&gl=US'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={countdownIcon}
              isBlog={false}
              title='Countdown Timer'
              description='Simple countdown Timer app using plain HTML, Javascript and css'
              ghLink='https://github.com/dphuong2103/CountdownTimer'
              demoLink='https://dphuong2103.github.io/CountdownTimer/'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
