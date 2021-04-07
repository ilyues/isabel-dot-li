import { React, useEffect } from 'react';
import './styles/desproj.css';
import cover from './images/work/canva/Hello1.gif';
import canva1 from './images/work/canva/canva1.gif';
import canva2 from './images/work/canva/canva2.gif';
import canva3 from './images/work/canva/canva3.gif';
import isabel1 from './images/work/canva/isabel1.gif';
import isabel2 from './images/work/canva/isabel2.gif';
import isabel3 from './images/work/canva/isabel3.gif';
import isabel4 from './images/work/canva/isabel4.gif';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Socials from './components/socials';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TextLoop from 'react-text-loop';

const Canva = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <main style={{ padding: '0' }} className='desproj'>
      <title>Canva</title>
      <Navbar />

      <div className='desproj-container'>
        <img src={cover} alt='Cover'></img>
        <div>
          I’m Isabel, a developer, designer, and all-round creative from
          Auckland, New Zealand. I’m also a first-year pursuing a Computer
          Science degree from UC Berkeley - my vision is to empower creators and
          uplift communities through technology.
          <p>
            I’ve been looking for an “unconventional” internship this winter
            break between mid-May and August, and would love, love, <i>love </i>
            the opportunity to do some work for Canva, especially in either a
            product management or product design role.{' '}
          </p>
          Keep reading for a little more on why I’d cross the Tasman Sea to work
          with you, and why I think we’d make a great team!
        </div>

        <div data-aos='fade-up' className='desproj-content'>
          <img src={canva1} alt='1. Canva champions creativity'></img>
          <div className='desproj-tagline'>
            Linking food and land co-operatives at every point along the food
            chain.
          </div>
          <div className='desproj-container'>
            <div>
              <p>
                As part of our{' '}
                <a href='https://codebase.berkeley.edu/' target='_blank'>
                  Berkeley Codebase
                </a>{' '}
                mentored project, we partnered with QBPOC-led nonprofit CoFED,
                an organisation which works with young folks of color from poor
                and working-class backgrounds to meet communities' needs through
                food and land co-ops, to produce a web portal which allows
                co-ops to find each other and collaborate.
              </p>
              <p>
                This experience was also my first exposure to web development,
                specifically using frameworks, packages, and APIs, and a
                significant exercise in remote collaboration.
              </p>
            </div>
          </div>
        </div>

        <div data-aos='fade-up' className='desproj-content'>
          <img src={canva2} alt='1. Canva champions creativity'></img>
          <div className='desproj-tagline'>
            Linking food and land co-operatives at every point along the food
            chain.
          </div>
          <div className='desproj-container'>
            <div>
              <p>
                As part of our{' '}
                <a href='https://codebase.berkeley.edu/' target='_blank'>
                  Berkeley Codebase
                </a>{' '}
                mentored project, we partnered with QBPOC-led nonprofit CoFED,
                an organisation which works with young folks of color from poor
                and working-class backgrounds to meet communities' needs through
                food and land co-ops, to produce a web portal which allows
                co-ops to find each other and collaborate.
              </p>
              <p>
                This experience was also my first exposure to web development,
                specifically using frameworks, packages, and APIs, and a
                significant exercise in remote collaboration.
              </p>
            </div>
          </div>
        </div>

        <div data-aos='fade-up' className='desproj-content'>
          <img src={canva3} alt='1. Canva champions creativity'></img>
          <div className='desproj-tagline'>
            Linking food and land co-operatives at every point along the food
            chain.
          </div>
          <div className='desproj-container'>
            <div>
              <p>
                As part of our{' '}
                <a href='https://codebase.berkeley.edu/' target='_blank'>
                  Berkeley Codebase
                </a>{' '}
                mentored project, we partnered with QBPOC-led nonprofit CoFED,
                an organisation which works with young folks of color from poor
                and working-class backgrounds to meet communities' needs through
                food and land co-ops, to produce a web portal which allows
                co-ops to find each other and collaborate.
              </p>
              <p>
                This experience was also my first exposure to web development,
                specifically using frameworks, packages, and APIs, and a
                significant exercise in remote collaboration.
              </p>
            </div>
          </div>
        </div>

        <div data-aos='fade-up' className='desproj-content'>
          <img src={isabel1} alt='1. Canva champions creativity'></img>
          <div className='desproj-tagline'>
            Linking food and land co-operatives at every point along the food
            chain.
          </div>
          <div className='desproj-container'>
            <div>
              <p>
                As part of our{' '}
                <a href='https://codebase.berkeley.edu/' target='_blank'>
                  Berkeley Codebase
                </a>{' '}
                mentored project, we partnered with QBPOC-led nonprofit CoFED,
                an organisation which works with young folks of color from poor
                and working-class backgrounds to meet communities' needs through
                food and land co-ops, to produce a web portal which allows
                co-ops to find each other and collaborate.
              </p>
              <p>
                This experience was also my first exposure to web development,
                specifically using frameworks, packages, and APIs, and a
                significant exercise in remote collaboration.
              </p>
            </div>
          </div>
        </div>
        <div data-aos='fade-up' className='desproj-content'>
          <img src={isabel2} alt='1. Canva champions creativity'></img>
          <div className='desproj-tagline'>
            Linking food and land co-operatives at every point along the food
            chain.
          </div>
          <div className='desproj-container'>
            <div>
              <p>
                As part of our{' '}
                <a href='https://codebase.berkeley.edu/' target='_blank'>
                  Berkeley Codebase
                </a>{' '}
                mentored project, we partnered with QBPOC-led nonprofit CoFED,
                an organisation which works with young folks of color from poor
                and working-class backgrounds to meet communities' needs through
                food and land co-ops, to produce a web portal which allows
                co-ops to find each other and collaborate.
              </p>
              <p>
                This experience was also my first exposure to web development,
                specifically using frameworks, packages, and APIs, and a
                significant exercise in remote collaboration.
              </p>
            </div>
          </div>
        </div>
        <div data-aos='fade-up' className='desproj-content'>
          <img src={isabel3} alt='1. Canva champions creativity'></img>
          <div className='desproj-tagline'>
            Linking food and land co-operatives at every point along the food
            chain.
          </div>
          <div className='desproj-container'>
            <div>
              <p>
                As part of our{' '}
                <a href='https://codebase.berkeley.edu/' target='_blank'>
                  Berkeley Codebase
                </a>{' '}
                mentored project, we partnered with QBPOC-led nonprofit CoFED,
                an organisation which works with young folks of color from poor
                and working-class backgrounds to meet communities' needs through
                food and land co-ops, to produce a web portal which allows
                co-ops to find each other and collaborate.
              </p>
              <p>
                This experience was also my first exposure to web development,
                specifically using frameworks, packages, and APIs, and a
                significant exercise in remote collaboration.
              </p>
            </div>
          </div>
        </div>
        <div data-aos='fade-up' className='desproj-content'>
          <img src={isabel4} alt='1. Canva champions creativity'></img>
          <div className='desproj-tagline'>
            Linking food and land co-operatives at every point along the food
            chain.
          </div>
          <div className='desproj-container'>
            <div>
              <p>
                As part of our{' '}
                <a href='https://codebase.berkeley.edu/' target='_blank'>
                  Berkeley Codebase
                </a>{' '}
                mentored project, we partnered with QBPOC-led nonprofit CoFED,
                an organisation which works with young folks of color from poor
                and working-class backgrounds to meet communities' needs through
                food and land co-ops, to produce a web portal which allows
                co-ops to find each other and collaborate.
              </p>
              <p>
                This experience was also my first exposure to web development,
                specifically using frameworks, packages, and APIs, and a
                significant exercise in remote collaboration.
              </p>
            </div>
          </div>
        </div>

        <div /* data-aos='fade-up' */ className='desproj-content'>
          <span
            style={{ fontSize: '36px', lineHeight: '48px', fontWeight: '400' }}
          >
            I want to be your next intern — together, let’s <br />
            <TextLoop
              children={[
                'make great design accessible',
                'empower creatives',
                'deliver convenience',
              ]}
              springConfig={{ stiffness: 180, damping: 12 }}
              adjustingSpeed={200}
              interval={2500}
            ></TextLoop>
            .
          </span>
        </div>
      </div>
      <Socials />
      <Footer />
    </main>
  );
};

export default Canva;
