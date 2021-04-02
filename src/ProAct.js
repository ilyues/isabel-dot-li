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
import mobilemockup from './images/work/proact/proact-mobile.png';
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
            Responsible for collaborative product design and pitching.
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
          <img src={mobilemockup} alt='Companion App' />
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
              style={{ color: '#001561', border: '#001561 solid 2px' }}
              className='desproj-button'
              href='https://www.figma.com/proto/sWyiqGI0au4RqPXMXIaVo4/ProAct-Demo?node-id=171%3A11&scaling=min-zoom'
              target='_blank'
            >
              Dashboard Prototype
            </a>
            <a
              style={{ color: '#4C49D7', border: '#4C49D7 solid 2px' }}
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
            Dissecting each stage of the response process
            <br />
            <span className='desproj-headertag'>
              Finding the primary use cases!
            </span>
          </div>
          <p>
            To determine how to effectively provide support to these children,
            we examined what needed to be achieved at all stages of the crisis
            response.
          </p>
          <p>
            We came up with the following use cases which drove our final
            design:
            <div className='desproj-emph'>
              <ol>
                <li>
                  Before the height of a crisis, disaster management at Save the
                  Children can create an event dashboard and use sentiment
                  analysis, individual significant tweets, and government data
                  to
                  <b> predict community movement, locations, and needs</b> in
                  advance.
                </li>
                <li>
                  During the event, <b>live, comprehensive data monitoring</b>{' '}
                  from Twitter and official sources{' '}
                  <b>allow informed decisions</b> for response design.
                </li>
                <li>
                  After initial contact with crisis victims, our companion app
                  lets responders correspond with headquarters to provide
                  <b> real-time, specific feedback on the crisis site</b> and
                  request resources and personnel in a standardised manner.
                </li>
              </ol>
            </div>
          </p>
        </div>
        <div data-aos='fade-up' className='desproj-content'>
          <div className='desproj-header'>
            Meeting user needs throughout the response cycle
            <br />
            <span className='desproj-headertag'>
              A closer look at our solution's features.
            </span>
          </div>
          <div className='desproj-2col2'>
            <img
              style={{ width: '35vw' }}
              src={sol1}
              alt='Solution #1: Centralised Disaster Management'
            />
            <div>
              <div className='desproj-subheader2'>
                1. Centralised Disaster Management
              </div>
              <div>
                Currently, Save the Children's crisis information gathering
                isn't automated; we believe a specific platform to centralise a
                range of useful data and sources for their many disaster
                managers and responders was integral to an organised and
                informed response design.
              </div>
            </div>
          </div>
          <div className='desproj-2col'>
            <img
              style={{ width: '30vw' }}
              src={sol2}
              alt="Solution #2: People's Needs and Government Sources"
            />
            <div>
              <div className='desproj-subheader2'>
                2. Identifying Victim Needs and Movement
              </div>
              <div>
                <p>
                  The selection of government and tweet analysis data is
                  gathered and visualised so that:
                  <ul>
                    <li>
                      Government information (from the fire service, government
                      twitter, and scraped from government sites) local to the
                      appropriate state or area is streamed to the dashboard.
                    </li>
                    <li>
                      Quick facts which aid effective response design, such as
                      demographics of the area and evacuation status.
                    </li>
                    <li>
                      Information is sorted by usefulness to response designers,
                      (such as placing popular tweets about the crisis,
                      suggested to be most urgent or most empathised with by
                      victims, at the top in a designated widget) but can also
                      be personalised by the dashboard user.
                    </li>
                    <li>
                      Sentiment analysis shows the evolving emotions in response
                      to crisis, offering a passive form of feedback over a
                      longer period of time.
                    </li>
                  </ul>
                </p>
                <p>
                  By leveraging sentiment analysis, the dashboard provides sheds
                  light on a neglected but often extremely specific and
                  therefore necessary source of community voices, in an
                  automated manner no less! This creates a holistic view of
                  families in crises by considering reliable, official sources
                  and also community calls for aid.
                </p>
              </div>
            </div>
          </div>
          <div className='desproj-2col2'>
            <img
              style={{ width: '30vw' }}
              src={sol3}
              alt='Solution #3: Companion App'
            />
            <div>
              <div className='desproj-subheader2'>
                3. Standardised Communication for an Adaptive Response
              </div>
              <div>
                <p>
                  A huge pain point noted by Save the Children was that when
                  responders arrived with the incorrect resources or personnel,
                  there was nothing they could do.
                </p>
                <p>
                  Our Live Response dashboard tab and companion mobile app
                  mitigate this by:
                  <ul>
                    <li>
                      Allowing responders to easily update the status of their
                      help centre with a general need level and quantitave
                      capacity data.{' '}
                    </li>
                    <li>
                      Organising points of contact and creating an easy overview
                      of multiple response centres through a profile directory.
                    </li>
                    <li>
                      Standardising communication and requests for aid from
                      responders.
                    </li>
                    <li>
                      Providing responders the contacts of nearby centres to
                      share and seek resources in emergency situations.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className='desproj-2col'>
            <img
              style={{ width: '30vw' }}
              src={sol4}
              alt='Solution #4: Customisation and Scalability'
            />
            <div>
              <div className='desproj-subheader2'>
                4. Customisation and Scalability
              </div>
              <div>
                <p>
                  A dashboard can be created for each event, featuring
                  event-specific twitter analysis, news updates and respondent
                  collaboration.{' '}
                </p>
                <p>
                  Dashboard users can customise each dashboard by module, and
                  set up sentiment analysis quickly.
                </p>
                <p>
                  These dashboards can be personalised to manage several
                  different ongoing crises, including of different types (fire,
                  flood, etc.)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Socials />
      <Footer />
    </main>
  );
};

export default ProAct;
