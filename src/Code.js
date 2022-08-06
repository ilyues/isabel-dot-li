import { React, useEffect, useState } from 'react';
import './styles/app.css';
import './styles/work.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

import ProjectItem from './components/proj';
import cofed from './images/work/cofed-thumb.png';
import proact from './images/work/proact/proact-coverimage.png';
import audacity from './images/work/audacity-thumb.png';
import atmobile from './images/work/atmobile.png';
import horizon from './images/work/horizon/thumb.png';
import hambur from './images/work/hambur.png';
import hwfa from './images/work/hwfa/hwfa-cover.png';
import zine from './images/work/zine/cover.png';
import sunburst from './images/work/sunburst/index.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

// markup
const Code = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  // mini projs - move to airtable or something, eventually
  const miniProjs = [
    {
      tagline: 'MyceliYum Web Portal for CoFED',
      title: 'Securely connecting QBPOC-led food and land co-operatives.',
      titleClickable: true,
      titleUrl: 'http://isabel.li/myceliyum',
      descrip:
        'As part of Berkeley Codebase, I worked with a team of eight to produce a web portal for QBPOC-led food and land co-operatives at every point along the food chain to connect. We strengthened secure co-op networking with profile personalisation, location search, and customised filters.',
      mainTag: 'Web dev',
      tags: ['React.js', 'Express.js', 'PostgreSQL', 'AWS', 'BIPOC', 'LGBTQ'],
      image: cofed,
    },

    {
      tagline: 'Hamburbur Stack Visualiser',
      title: 'A delicious way to learn about the Stack ADT.',
      titleClickable: true,
      titleUrl: 'https://ilyues.github.io/hambur/',
      descrip:
        'I made a fun and novel interactive web browser visualisation of the stack data structure, using the p5.js JavaScript library.',
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
          <div className='work-header'>
            <svg
              viewBox='0 0 500 500'
              width='100%'
              id='blobSvg'
              className='work-blob'
            >
              <path
                id='blob'
                d='M435,305Q422,360,359.5,357Q297,354,256.5,421.5Q216,489,154,460.5Q92,432,90,365Q88,298,119.5,259.5Q151,221,175,206Q199,191,211,126.5Q223,62,263,98Q303,134,374.5,129Q446,124,447,187Q448,250,435,305Z'
                fill='none'
                stroke-width='7px'
                stroke='#ffc250'
              ></path>
            </svg>
            <div className='work-title'>
              <h2>
                Here are some things I've been working on and learning from.
              </h2>
            </div>
            {/* <p>Let's take a look at... </p>

            <p>I love doing work that empowers... </p> */}
          </div>
          <div className='proj-list'>
            {miniProjs.map((proj) => (
              <div data-aos='fade-up'>
                <ProjectItem
                  tagline={proj.tagline}
                  title={proj.title}
                  image={proj.image}
                  tags={proj.tags}
                  mainTag={proj.mainTag}
                  titleClickable={proj.titleClickable}
                  titleUrl={proj.titleUrl}
                  descrip={proj.descrip}
                />
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default Code;
