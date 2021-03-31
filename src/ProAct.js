/* eslint-disable react/jsx-no-target-blank */
import { React, useEffect } from 'react';
import './styles/desproj.css';
import cover from './images/work/proact/proact-coverimage.png';
import desktop from './images/work/proact/big-frame.png';
import mobile from './images/work/proact/big-frame-mobile.png';
import sol1 from './images/work/proact/sol-1.png';
import sol2 from './images/work/proact/sol-2.png';
import sol3 from './images/work/proact/sol-3.png';
import sol4 from './images/work/proact/sol-4.png';
import logo from './images/work/proact/ProAct-logo.png';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Socials from './components/socials';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProAct = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <main className='desproj'>
      <title>about Isabel 🖍️</title>
      <Navbar />

      <div className='desproj-container'>
        <div className='desproj-coverimage'>
          <img src={cover} alt='Cover'></img>
        </div>
        <div className='desproj-titlebox'>
          <div className='desproj-title'>
            <h5>
              ProAct:
              <br />
              Disaster Response Dashboard
            </h5>
          </div>
          <div className='desproj-details'>
            <h6>Team:</h6>In collaboration with Mun Joon Teo, Winny Jiang, and
            Zi Lin Wang. <p />
            Responsible for product design and pitching.
            <p>
              <h6>Tools:</h6> Figma, Illustrator
            </p>
            <p>
              <h6>Timeline:</h6> 24h, 16-17 Jan 2021
            </p>
          </div>
        </div>
        <div data-aos='fade-up' className='desproj-content'>
          <div className='desproj-tagline'>
            Championing quality disaster response design and child welfare.
          </div>
          <div className='desproj-2col'>
            <p>
              Our web dashboard and companion mobile app design were produced
              for the 2021 Accenture #HackForGood hackathon challenge. We had 24
              hours to create a product for one of their associated charities,
              Save The Children Australia, and an additional 24 hours to create
              a slide deck before pitching to the judges as a finalist.
            </p>
            <img
              style={{ width: '20vw', marginLeft: '2vw' }}
              src={logo}
              alt='ProAct Logo'
            />
          </div>

          <p>
            Our assigned client, Save The Children, is a relief provider for
            children affected by disasters. They focus on establishing
            child-friendly spaces in evacuation and recovery centres to ensure
            children receive the crucial support, resources, and comfort they
            need during an emergency, simultaneously relieving parents from the
            responsibility of attending to their child in a high-stress
            situation.{' '}
          </p>
          <p>
            We were tasked with creating a product which utilised Twitter
            sentiment analysis to aid Save The Children's relief efforts in some
            way — problems they gave us included their response speed, accuracy,
            and overall "reactive" (as opposed to proactive) approach.
          </p>
        </div>
        <div data-aos='fade-up' className='desproj-content'>
          <div className='desproj-header'>
            Overview
            <br />
            <span className='desproj-headertag'>
              Problem, process, outcome.
            </span>
          </div>
          <p>
            After analysing the brief and posing our questions to the charity
            representative through voice call, we identified and categorised
            their main issues into the following pain points:
          </p>
          <span className='desproj-emph'>
            <ol>
              <li>
                The lack of <b>live information</b> about disaster victims'
                situations
              </li>
              <li>
                An inability to evaluate <b>specific needs</b> from victims
              </li>
              <li>
                Poor capacity to <b>monitor and adapt</b> to changing crisis
                situations.
              </li>
            </ol>
          </span>
          <p>
            As a team, we proceeded to separately brainstorm and explore
            solutions, before coming together and deciding to deliver a web
            dashboard and companion app. We created low fidelity wireframes the
            general structure of the web app, before moving to carefully how
            each tab of dashboard features should be categorised and what
            widgets would be most appropriate to showcase.
          </p>
          <p>
            As we moved through iterations, we developed common use cases for
            both responders on the ground and to justify out decisions for the
            major dashboard features. Our final solution provided Save The
            Children the power to:
            <span className='desproj-emph'>
              <ul>
                <li>
                  Monitor a developing situation in <b>real-time</b>
                </li>
                <li>
                  Evaluate children’s needs holistically through{' '}
                  <b>community voices</b>
                </li>
                <li>
                  Design an <b>adaptive response</b> with live feedback.
                </li>
              </ul>
            </span>
          </p>
          <div className='desproj-2col'>
            <a
              style={{ backgroundColor: '#001561' }}
              className='desproj-button'
              href='https://www.figma.com/proto/sWyiqGI0au4RqPXMXIaVo4/ProAct-Demo?node-id=171%3A11&scaling=min-zoom'
              target='_blank'
            >
              Dashboard Prototype
            </a>
            <a
              style={{ backgroundColor: '#4C49D7' }}
              className='desproj-button'
              href='https://www.figma.com/proto/sWyiqGI0au4RqPXMXIaVo4/ProAct-Demo?node-id=98%3A681&scaling=min-zoom'
              target='_blank'
            >
              Companion App Prototype
            </a>
          </div>

          <img src={desktop} alt='My redesign solutions' />
          <img src={mobile} alt='My redesign solutions for mobile' />
        </div>
        <div data-aos='fade-up' className='desproj-content'>
          <div className='desproj-header'>
            Use cases
            <br />
            <span className='desproj-headertag'>
              Investigating users' needs
            </span>
          </div>
          <p>
            To determine how to effectively provide support to these children,
            we examined what needed to be done at all stages of the crisis
            response.
          </p>
          <p>
            We came up with the following use cases:
            <ol>
              <li>
                Before an event, sentiment analysis is used to predict the
                movement of people and prepare resources and personnel in
                advance.
              </li>
              <li>
                During the event, Twitter and official government data is
                collected to monitor the situation and keep headquarters
                updated.
              </li>
              <li>
                After the initial response, our companion app lets responders
                communicate with headquarters to efficiently provide support
                based on the capacities of safe spaces.
              </li>
            </ol>
          </p>
        </div>
        <div data-aos='fade-up' className='desproj-content'>
          <div className='desproj-header'>
            Solutions
            <br />
            <span className='desproj-headertag'>
              The proposed answers to our questions.
            </span>
          </div>
          <div className='desproj-2col'>
            <img
              style={{ width: '40vw' }}
              src={sol1}
              alt='Solution #1: Centralised Disaster Management'
            />
            <div>
              <div className='desproj-subheader2'>
                1. Centralised Disaster Management
              </div>
              <div>
                Our centralised platform reduces response lag time, one of the
                major pain points for relief.
              </div>
            </div>
          </div>
          <div className='desproj-2col'>
            <div>
              <div className='desproj-subheader2'>
                2. People's Needs and Government Sources
              </div>
              <div>
                <p>
                  We analyse twitter feeds for event-specific tweets. Then,
                  leveraging sentiment analysis we quickly identify “negative”
                  tweets that indicate a family requires aid. Our platform also
                  pulls updates from government sources to provide HQ with
                  relevant developments.
                </p>
                <p>
                  This creates a holistic view of families in crises by
                  considering reliable, official sources and also community
                  voices from tweets.
                </p>
              </div>
            </div>
            <img
              style={{ width: '30vw' }}
              src={sol2}
              alt="Solution #2: People's Needs and Government Sources"
            />
          </div>
          <div className='desproj-2col'>
            <img
              style={{ width: '30vw' }}
              src={sol3}
              alt='Solution #3: Companion App'
            />
            <div>
              <div className='desproj-subheader2'>3. Companion App</div>
              <div>
                Respondents can contact HQ for resources and personnel via the
                companion app. Messages are then sent to the dashboard
              </div>
            </div>
          </div>
          <div className='desproj-2col'>
            <div>
              <div className='desproj-subheader2'>4. Customisation</div>
              <div>
                A dashboard can be created for each event, featuring
                event-specific twitter analysis, news updates and respondent
                collaboration.
              </div>
            </div>
            <img
              style={{ width: '40vw' }}
              src={sol4}
              alt='Solution #4: Customisation'
            />
          </div>
        </div>
      </div>
      <Socials />
      <Footer />
    </main>
  );
};

export default ProAct;
