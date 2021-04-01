import { React, useEffect } from 'react';
import './styles/app.css';
import li from './images/LI.png';
import yue from './images/YUE.png';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Socials from './components/socials';
import MiniProject from './components/miniproject';
import ProjectItem from './components/proj';
import TextLoop from 'react-text-loop';
import cofed from './images/work/cofed.png';
import proact from './images/work/proact.png';
import hambur from './images/work/hambur.png';
import atmobile from './images/work/atmobile/sol-home.png';
import art01 from './images/art-01.jpg';
import art02 from './images/art-02.jpg';
import art03 from './images/art-03.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

// markup
const Work = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  // mini projs - move to airtable or something, eventually
  const miniProjs = [
    {
      title: 'Auckland Transport Mobile Redesign Sprint',
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
    {
      title: 'MyceliYum Web Portal',
      titleClickable: false,
      titleUrl: null,
      client: true,
      clientName: 'CoFED',
      clientClickable: true,
      clientUrl: 'http://cofed.coop/',
      descrip:
        'Worked with a team of eight to produce a web portal for BIPOC-led food and land co-operatives at every point along the food chain to connect. Strengthened secure co-op networking with profile personalisation, location search, and customised filters.',
      mainTag: 'Web dev',
      tags: ['React.js', 'Express.js', 'PostgreSQL'],
      image: cofed,
    },
    {
      title: 'AUDACITY: Investigation into Youth Voice',
      titleClickable: false,
      titleUrl: null,
      client: true,
      clientName: 'CoFED',
      clientClickable: true,
      clientUrl: 'http://cofed.coop/',
      descrip:
        'Worked with a team of eight to produce a web portal for BIPOC-led food and land co-operatives at every point along the food chain to connect. Strengthened secure co-op networking with profile personalisation, location search, and customised filters.',
      mainTag: 'Web dev',
      tags: ['React.js', 'Express.js', 'PostgreSQL'],
      image: cofed,
    },
    {
      title: 'Proact Disaster Response Dashboard',
      titleClickable: true,
      titleUrl: 'http://isabel.li/proact',
      client: true,
      clientClickable: false,
      clientUrl: null,
      clientName: 'Save the Children (#HackForGood Accenture)',
      descrip:
        'In a team of four, designed dashboard and companion app to streamline natural disaster crisis response and identify victim needs. Uses real-time information through community (sentiment analysis) and government sources, tailored crisis map, and standardised responder communication system.',
      mainTag: 'Product design',
      tags: ['Figma', 'Wireframing', 'Prototyping'],
      image: proact,
    },
    {
      title: 'How We Fall Apart Character Illustrations',
      titleClickable: false,
      titleUrl: null,
      client: true,
      clientName: 'CoFED',
      clientClickable: true,
      clientUrl: 'http://cofed.coop/',
      descrip:
        'Worked with a team of eight to produce a web portal for BIPOC-led food and land co-operatives at every point along the food chain to connect. Strengthened secure co-op networking with profile personalisation, location search, and customised filters.',
      mainTag: 'Web dev',
      tags: ['React.js', 'Express.js', 'PostgreSQL'],
      image: cofed,
    },
    {
      title: 'Around the World!: Charity Zine',
      titleClickable: false,
      titleUrl: null,
      client: true,
      clientName: 'CoFED',
      clientClickable: true,
      clientUrl: 'http://cofed.coop/',
      descrip:
        'Worked with a team of eight to produce a web portal for BIPOC-led food and land co-operatives at every point along the food chain to connect. Strengthened secure co-op networking with profile personalisation, location search, and customised filters.',
      mainTag: 'Web dev',
      tags: ['React.js', 'Express.js', 'PostgreSQL'],
      image: cofed,
    },
    {
      title: 'Hamburbur Stack Visualiser',
      titleClickable: true,
      titleUrl: 'https://ilyues.github.io/hambur/',
      client: false,
      clientClickable: false,
      clientUrl: null,
      clientName: null,
      descrip:
        'Fun and novel interactive web browser visualisation of the stack data structure, made with the p5.js JavaScript library.',
      mainTag: 'Web dev',
      tags: ['HTML/CSS', 'p5.js'],
      image: hambur,
    },
  ];
  return (
    <div className='wrapper'>
      <main>
        <title>Isabel Li 🖍️</title>

        <Navbar />

        <div className='content-two'>
          <div className='subheader-cont'>
            <div className='subheader'>
              Here are some things I've been working on and learning from.
            </div>
          </div>
          <div className='proj-list'>
            {miniProjs.map((proj) => (
              <div data-aos='fade-up'>
                <ProjectItem
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
        <Socials />
        <Footer />
      </main>
    </div>
  );
};

export default Work;
