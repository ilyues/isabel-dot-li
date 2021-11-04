import * as React from 'react';
import './styles/ab.css';
import cloud2 from './images/cloud-02.png';
import Footer from './components/footer';
import bee from './images/bee.jpg';
import Navbar from './components/navbar';
import Socials from './components/socials';

// markup
const About = () => {
  return (
    <main className='ab'>
      <title>about Isabel 🖍️</title>
      <Navbar />
      <div className='profile'>
        <img className='bee' src={bee} alt='me!' />
        <div className='profile-text'>
          <div className='title'>
            <div className='lettuce'>
              <span className='wave'>👋</span> Nice to meet you!{' '}
            </div>
            <h2>I'm Isabel Li.</h2>
            <div className='bio'>
              <b>Current Location:</b>{' '}
              <span>Berkeley, in sunny California.</span>
              <p>
                <b>
                  I'm a multidisciplinary creative and developer pursuing an
                  education in computer science, design, and entrepreneurship at
                  UC Berkeley.
                </b>
              </p>
              <p>
                <b>Some things that make my heart beat faster include:</b>
                <li>
                  Literature in all its forms—the power of words as weapons.
                </li>
                <li>
                  Using the bandsaw in the wood workshop—that scary machine
                  (literally) raises my heart rate.
                </li>
                <li>
                  Great animation, especially when pushed as a medium! Let's
                  re-re-rewatch <i>Into the Spiderverse</i> together.
                </li>
              </p>
              <p>
                Inclusivity, diversity, accessibility, and kindness are at the
                core of the society I want to help build.
              </p>
              <p>
                On the lookout for work in illustration (cover art, editorial,
                surprise me), and intern opportunities in product design,
                product management, and software engineering.
              </p>
            </div>
            <h3>
              Here to engender creativity & uplift communities through tech.{' '}
            </h3>
          </div>
        </div>
      </div>
      <img className='cloud1' src={cloud2} alt='(a cloud)' />
      <svg className='blob2' viewBox='0 0 500 500' width='100%' id='blobSvg'>
        <path
          id='blob'
          d='M428,304Q456,358,407,382.5Q358,407,315.5,423.5Q273,440,223,447Q173,454,173,386Q173,318,99,311.5Q25,305,36,252.5Q47,200,98.5,181Q150,162,158,95Q166,28,223,15Q280,2,323,42Q366,82,363,137Q360,192,380,221Q400,250,428,304Z'
          fill='none'
          stroke-width='7px'
          stroke='#FF5735'
        ></path>
      </svg>
      <svg className='blob' viewBox='0 0 500 500' width='100%' id='blobSvg'>
        <path
          id='blob'
          d='M399,324.5Q428,399,350,387Q272,375,216.5,389.5Q161,404,125,356.5Q89,309,88.5,250Q88,191,141,172.5Q194,154,243,83.5Q292,13,345.5,69Q399,125,384.5,187.5Q370,250,399,324.5Z'
          fill='none'
          stroke-width='7px'
          stroke='rgb(5, 101, 137)'
        ></path>
      </svg>
      <Socials />
      <Footer />
    </main>
  );
};

export default About;
