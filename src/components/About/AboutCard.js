import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className='purple'>Đức Phương </span>
            from <span className='purple'> HCM, Viet Nam</span>
            <br /> After graduating from FTU, Now I am a student of{' '}
            <span className='purple'>UIT</span> to pursue my passion.
            <br />
            Additionally, I am currently a self study software developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul className=''>
            <li className='about-activity'>
              <ImPointRight /> Playing Games
            </li>
            <li className='about-activity'>
              <ImPointRight /> Learning new things
            </li>
            <li className='about-activity'>
              <ImPointRight /> Languages
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            "Develop a passion for learning. If you do, you will never cease to grow."{' '}
          </p>
          <footer className='blockquote-footer'>SouAnthony J. D'Angelomyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
