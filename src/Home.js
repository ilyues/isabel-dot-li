import { React, useEffect } from 'react';
import './styles/app.css';
import li from './images/logo-01.png';
import yue from './images/logo-02.png';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Socials from './components/socials';
import MiniProject from './components/miniproject';
import TextLoop from 'react-text-loop';
import cofed from './images/work/cofed-thumb.png';
import horizon from './images/work/horizon/thumb.png';
import proact from './images/work/proact/proact-coverimage.png';
import audacity from './images/work/audacity-thumb.png';
import atmobile from './images/work/atmobile.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

// markup
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  // changing greeting largely inspired by http://ellen.li
  var today = new Date();
  var hourNow = today.getHours();
  var hello;

  if (hourNow > 18) {
    hello = 'Evening!';
  } else if (hourNow > 12) {
    hello = 'Good afternoon!';
  } else if (hourNow > 5) {
    hello = 'Morena!';
  } else {
    hello = 'Kia ora!';
  }

  // items for the things i'm currently doing
  const items = [
    <span>
      <span className='song'>R U Mine?</span>{' '}
      <span className='artist'>— Arctic Monkeys</span>
    </span>,
    <span>
      <span className='song'>愛人錯過</span>{' '}
      <span className='artist'>— 告五人</span>
    </span>,
    <span>
      <span className='song'>Snow 눈</span>{' '}
      <span className='artist'>— SURL</span>
    </span>,
    <span>
      <span className='song'>Opera House</span>{' '}
      <span className='artist'>— Cigarettes After Sex</span>
    </span>,
    <span>
      <span className='song'>No Blueberries</span>{' '}
      <span className='artist'>— CL + DPR IAN + DPR LIVE</span>
    </span>,
  ];

  // mini projs - move to airtable or something, eventually
  const miniProjs = [
    {
      tagline: 'Adobe Creative Jam x Southwest Airlines',
      title: 'What’s on the horizon for modern in-flight experiences?',
      titleClickable: true,
      titleUrl: 'http://isabel.li/horizon',
      client: false,
      clientName: null,
      clientClickable: false,
      clientUrl: null,
      descrip:
        'Mobility is integral to work, education, and community. Knowing this is an issue which affects a significant population of Auckland city, I endeavoured to redesign the UI/UX and overall product for a more frictionless commute.',
      mainTag: 'Product design',
      tags: ['User research', 'UI/UX', 'Wireframing', 'Figma'],
      image: horizon,
    },
    {
      tagline: 'AT Mobile Redesign Sprint',
      title: 'Aiming for frictionless public transport in Auckland.',
      titleClickable: true,
      titleUrl: 'http://isabel.li/at-mobile',
      client: false,
      clientName: null,
      clientClickable: false,
      clientUrl: null,
      descrip:
        'Mobility is integral to work, education, and community. Knowing this is an issue which affects a significant population of Auckland city, I endeavoured to redesign the UI/UX and overall product for a more frictionless commute.',
      mainTag: 'Product design',
      tags: ['User research', 'UI/UX', 'Wireframing', 'Figma'],
      image: atmobile,
    },
    // {
    //   tagline: '#HackForGood Accenture',
    //   title: 'How can we design more accurate disaster responses?',
    //   titleClickable: true,
    //   titleUrl: 'http://isabel.li/proact',
    //   client: true,
    //   clientClickable: false,
    //   clientUrl: null,
    //   clientName: 'Save the Children (#HackForGood Accenture)',
    //   descrip:
    //     'In a team of four, designed dashboard and companion app to streamline natural disaster crisis response and identify victim needs. Uses real-time information through community (sentiment analysis) and government sources, tailored crisis map, and standardised responder communication system.',
    //   mainTag: 'Product design',
    //   tags: ['Figma', 'Wireframing', 'Prototyping'],
    //   image: proact,
    // },
    {
      tagline: 'MyceliYum Web Portal for CoFED',
      title: 'Securely connecting QBPOC-led food and land co-operatives.',
      titleClickable: true,
      titleUrl: 'http://isabel.li/myceliyum',
      client: true,
      clientName: 'CoFED',
      clientClickable: true,
      clientUrl: 'http://cofed.coop/',
      descrip:
        'Worked with a team of eight to produce a web portal for BIPOC-led food and land co-operatives at every point along the food chain to connect. Strengthened secure co-op networking with profile personalisation, location search, and customised filters.',
      mainTag: 'Web dev',
      tags: ['React.js', 'Express.js', 'PostgreSQL', 'AWS'],
      image: cofed,
    },
    {
      tagline: 'Personal Visual Investigation',
      title: 'How do youth feel heard in a digital vacuum?',
      titleClickable: true,
      titleUrl: 'http://isabel.li/audacity',
      client: false,
      clientName: null,
      clientClickable: false,
      clientUrl: null,
      descrip:
        'Worked with a team of eight to produce a web portal for BIPOC-led food and land co-operatives at every point along the food chain to connect. Strengthened secure co-op networking with profile personalisation, location search, and customised filters.',
      mainTag: 'Fine art',
      tags: ['Oil', 'Gouache', 'Clip Studio Paint', 'Woodworking'],
      image: audacity,
    },
  ];
  return (
    <div className='wrapper'>
      <main>
        <title>Isabel Li 🖍️</title>

        <Navbar />

        <div className='bread-buffer1'>
          <img className='bread-slice1' src={li} alt='李' />
        </div>

        <div className='filling'>
          <div className='meat'>
            <div className='lettuce'>🖍️ {hello} </div>
            <h1>
              I’m Isabel. <br /> I design, illustrate, and code towards a kinder
              world.
            </h1>
            <div className='pickles'>
              <span className='doing-stuff'>Listening to:</span>{' '}
              <span className='stuff'>
                {items[Math.floor(Math.random() * items.length)]}
              </span>
              <br />
            </div>
            <div className='pickles'>
              <span className='doing-stuff'>Currently:</span>
              {'  '}
              <TextLoop
                interval={3500}
                fade={true}
                springConfig={{ stiffness: 5, damping: 2 }}
              >
                <span className='stuff'>resting, learning, making.</span>
                <span className='stuff'>
                  {' '}
                  developing @{' '}
                  <a href='https://codebase.berkeley.edu/' target='_blank'>
                    Berkeley Codebase.
                  </a>
                </span>
                <span className='stuff'>elbows deep in oil paints.</span>
                <span className='stuff'>writing poetry on a Google doc.</span>
                <span className='stuff'>
                  freelancing, portrait commissions.
                </span>
                <span className='stuff'>
                  designing @{' '}
                  <a href='https://innovativedesign.club/' target='_blank'>
                    Innovative Design.
                  </a>
                </span>
              </TextLoop>
              <p />
              <div className='portfolio-link'>
                <a href='https://www.dropbox.com/s/of87oqzngv2t0dw/IsabelLi_Portfolio.pdf?dl=0'>
                  <b>Check out my design portfolio (as a PDF!) here.</b>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='bread-buffer2'>
          <img className='bread-slice2' src={yue} alt='玥' />
        </div>
        <div className='content-two'>
          {/*  <div className='subheader-cont'>
            <div className='subheader'>
              Here are some things I've been working on and learning from.
            </div>
          </div> */}
          <div className='proj-list'>
            {/* <svg
              className='tech-blob'
              viewBox='0 0 500 500'
              width='100%'
              id='blobSvg'
            >
              <path
                id='blob'
                d='M405.5,303.5Q436,357,373.5,356.5Q311,356,280.5,369.5Q250,383,208.5,388.5Q167,394,109.5,379Q52,364,40,307Q28,250,52.5,200Q77,150,134.5,149.5Q192,149,221,112Q250,75,298,79.5Q346,84,375.5,122.5Q405,161,390,205.5Q375,250,405.5,303.5Z'
                fill='none'
                stroke-width='7px'
                stroke='#c8d2ff'
              ></path>
            </svg> */}
            {miniProjs.map((proj) => (
              <div /* data-aos='fade-up' */>
                <MiniProject
                  tagline={proj.tagline}
                  title={proj.title}
                  image={proj.image}
                  tags={proj.tags}
                  mainTag={proj.mainTag}
                  client={proj.client}
                  clientName={proj.clientName}
                  titleClickable={proj.titleClickable}
                  titleUrl={proj.titleUrl}
                  descrip={proj.descrip}
                />
              </div>
            ))}
          </div>
        </div>
        <div className='subheader-cont'>
          <div className='subheader'>
            If we can work together to make the world a brighter place, let me
            know. ✨
            {/* <svg
              viewBox='0 0 500 500'
              className='bottom-blob'
              width='100%'
              id='blobSvg'
            >
              <path
                id='blob'
                d='M418,299Q403,348,356.5,365Q310,382,270.5,382Q231,382,193.5,370.5Q156,359,122.5,328Q89,297,72,245Q55,193,78,135.5Q101,78,168.5,114Q236,150,284.5,109.5Q333,69,392.5,94.5Q452,120,442.5,185Q433,250,418,299Z'
                fill='none'
                stroke-width='7px'
                stroke='#457a8f'
              ></path>
            </svg> */}
          </div>
        </div>

        <Socials />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
