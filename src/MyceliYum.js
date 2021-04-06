import { React, useEffect } from 'react';
import './styles/desproj.css';
import cover from './images/work/cofed-thumb.png';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Socials from './components/socials';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MyceliYum = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <main className='desproj'>
      <title>MyceliYum</title>
      <Navbar />

      <div className='desproj-container'>
        <div className='desproj-coverimage'>
          <img src={cover} alt='Cover'></img>
        </div>
        <div className='desproj-titlebox'>
          <div className='desproj-title'>
            <h5>
              MyceliYum:
              <br />
              Food Co-op Network Portal
            </h5>
          </div>
          <div className='desproj-details'>
            <h6>Team:</h6>Project led by Bianca Lee and Richard Liu. <br />
            In collaboration with Eric Hao, Ranon Larpcharern, Jane Lee, Zaid
            Mamsa, and Claire Thibodeaux. <p />
            Responsible for collaborative design and software development.
            <p>
              <h6>Tools:</h6> React.js, Express.js, PostgreSQL, Amazon S3
            </p>
            <p>
              <h6>Timeline:</h6> Sep - Dec 2020
            </p>
          </div>
        </div>
        <div /* data-aos='fade-up' */ className='desproj-content'>
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
            <a href='http://cofed.coop' target='_blank'>
              <img
                src='https://d3n8a8pro7vhmx.cloudfront.net/themes/5320b56401925b39f3000001/attachments/original/1480552392/logo_blue_new.png?1480552392'
                alt='CoFED Logo'
              />
            </a>
          </div>
        </div>
      </div>
      <Socials />
      <Footer />
    </main>
  );
};

export default MyceliYum;
