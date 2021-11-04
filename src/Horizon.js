import { React, useEffect } from 'react';
import './styles/desproj.css';
import cover from './images/work/horizon/thumb.png';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Socials from './components/socials';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Horizon = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <main className='desproj'>
      <title>Horizon</title>
      <Navbar />

      <div className='desproj-container'>
        <div className='desproj-coverimage'>
          <img src={cover} alt='Cover'></img>
        </div>
        <div className='desproj-titlebox'>
          <div className='desproj-title'>
            <h5>
              Horizon:
              <br />
              An In-Flight Travel Companion
            </h5>
          </div>
          <div className='desproj-details'>
            <h6>Team:</h6>In collaboration with Julia Wang for Adobe Creative
            Jam x Southwest Airlines. 2nd place. <p />
            <p>
              <h6>Tools:</h6> Adobe XD.
            </p>
            <p>
              <h6>Timeline:</h6> 20 - 27 May 2021.
            </p>
          </div>
        </div>
        <div /* data-aos='fade-up' */ className='desproj-content'>
          <div className='desproj-tagline'>
            With what seems like the end of quarantine in sight, people are
            yearning to move around and travel. <br /> <br />
            Whether it’s to meet friends and family or to expand horizons, our
            app provides a fun and relaxing way for passengers to find a deeper
            connection and understanding of their destination.
            <br />
            <br />
          </div>
          <div className='desproj-container'>
            <div
              className='horizon-prototype'
              styles={{ borderRadius: '10px' }}
            >
              <iframe
                width='768'
                height='1024'
                src='https://xd.adobe.com/embed/464db581-999d-4160-8fe2-87d744c480f2-131e/'
                frameborder='20'
                allowfullscreen
                style={{
                  borderRadius: '20px',
                  borderStyle: 'solid 5px #000000',
                }}
              ></iframe>{' '}
            </div>
            <div>
              <br />
              <p>
                Horizon is an in-flight companion for travelers offering
                exploration, entertainment, and education about their
                destination. We provide multimedia entertainment for passengers
                who want to look, listen, and learn, while offering a practical
                element with bookmarkable activities and in-app brochures.
              </p>
              <p>
                The digital medium combines the creativity of an editorial
                interface and the convenience of intelligent app navigation,
                encouraging natural exploration as articles and entertainment
                flow into relevant attractions and activities and vice versa.
                Passengers are immersed in the culture of their destination
                through thoughtfully placed auditory enhancements and colorful
                visuals, delivering a unique yet scalable sensory experience.
              </p>
              <p>
                Horizon’s content is not only tailored to the passengers
                destination, but also their place and length of stay--it’s a
                personal travel guide with adjustable preferences. All articles,
                categories of exploration and activities are carefully curated
                with the passengers' needs and preferences in mind. Explore our
                prototype.
              </p>
              <br></br>
            </div>
          </div>
        </div>
      </div>
      <Socials />
      <Footer />
    </main>
  );
};

export default Horizon;
