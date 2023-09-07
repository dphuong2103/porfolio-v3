import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import chat from '../../Assets/Projects/chat.png';
import timelessLove from '../../Assets/Projects/timelesslove.png';
import workoutTracker from '../../Assets/Projects/workouttracker.png';
import timer from '../../Assets/Projects/timer.png';
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
              imgPath={chat}
              isBlog={false}
              title="Let's tawk"
              description='Chat App allows user to send and receive message (plain text, file, voice,...) in private, group chat. Manage friends and other feature '
              ghLink='https://github.com/dphuong2103/ChatApp-FE'
              demoLink='https://chatapp.midouz.com'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={timelessLove}
              isBlog={false}
              title='Timeless Love'
              description='An app for couples to store their dating information and memories'
              ghLink='https://github.com/dphuong2103/timelesslove'
              demoLink=''
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={workoutTracker}
              isBlog={false}
              title='Workout Tracker'
              description='Simple workout tracker to keep track of your workout and gain better muscles '
              ghLink='https://github.com/dphuong2103/workout-tracker'
              demoLink='https://play.google.com/store/apps/details?id=com.midouz.workout_tracker_phone'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={timer}
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
