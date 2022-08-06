import { React, useEffect } from 'react';
import './styles/desproj.css';
import cover from './images/work/sunburst/index.png';
import design1 from './images/work/sunburst/design1.jpg';
import design2 from './images/work/sunburst/design2.jpg';
import doodle1 from './images/work/sunburst/doodle1.png';
import final1 from './images/work/sunburst/final1.png';
import mockup1 from './images/work/sunburst/mockup1.jpg';
import stylescape1 from './images/work/sunburst/stylescape1.png';
import stylescape2 from './images/work/sunburst/stylescape2.jpg';
import stylescape3 from './images/work/sunburst/stylescape3.jpg';
import Footer from './components/footer';
import Navbar from './components/navbar';

import AOS from 'aos';
import 'aos/dist/aos.css';

const SunburstShack = () => {
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
              Sunburst Shack:
              <br />
              Brand and Packaging Design
            </h5>
          </div>
          <div className='desproj-details'>
            <h6>Team:</h6>Innovative Design Fall 2020 Blue Team. <p />
            Responsible for ideation, iteration, collaborative design, and
            producing final deliverable.
            <p>
              <h6>Tools:</h6> Adobe Photoshop, Adobe Illustrator
            </p>
            <p>
              <h6>Deliverables:</h6> Doodle library for use by client on
              packaging, menu, food truck decals.
            </p>
            <p>
              <h6>Timeline:</h6> Sep - Dec 2020
            </p>
          </div>
        </div>
        <div /* data-aos='fade-up' */ className='desproj-content'>
          <div className='desproj-tagline'>Aloha from your coffee cup!</div>
          <div className='desproj-container'>
            <div>
              <img src={stylescape1} alt='Stylescape 1' />
              <img src={stylescape2} alt='Stylescape 2' />

              <p>
                I created packaging designs for Sunburst Shack, a food truck
                serving Hawaiian coffee and shaved ice, with the intention of
                staying true to Aloha. Deliverables included coffee cup, menu,
                and food truck decal designs, fulfilled through Innovative
                Design @ Berkeley.
              </p>
              <img src={mockup1} alt='Mockup 1' />
              <img src={stylescape3} alt='Stylescape 3' />

              <p>
                The client originally wanted separate designs for coffee cups,
                shaved ice bowls, menus, and a food truck wrap decal, but later
                revised the brief for an all-inclusive doodle library. Our team
                was adaptive and delivered results he loved despite the new
                direction halfway through the project.
              </p>
              <img src={design1} alt='Design 1' />
              <img src={design2} alt='Design 2' />
              <img src={doodle1} alt='My original doodles' />

              <p>
                We regularly pitched our progress and iterations to the client
                to gain feedback, and worked with each others' ideas. The client
                chose my illustrations for the final delivered vector pack.
              </p>
              <img src={final1} alt='Final deliverable' />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default SunburstShack;
