import { React, useEffect, useState } from 'react';
import './styles/app.css';
import './styles/work.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Socials from './components/socials';
import ProjectItem from './components/proj';
import figma from './images/work/figma.png';
import audacity from './images/work/audacity-thumb.png';
import atmobile from './images/work/atmobile.png';
import horizon from './images/work/horizon/thumb.png';
import hwfa from './images/work/hwfa/hwfa-cover.png';
import zine from './images/work/zine/cover.png';
import sunburst from './images/work/sunburst/index.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

// markup
const Design = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  // mini projs - move to airtable or something, eventually
  const miniProjs = [
    {
      tagline: 'Figma Feature Design for Education, Case Study',
      title: 'How can busy beginner designers access passive design education?',
      titleClickable: true,
      titleUrl:
        'https://ilyues.notion.site/ilyues/Figma-Feature-Design-for-Education-a2c139ad85af41d086fbc7b7ea6589a1',
      client: false,
      clientName: null,
      clientClickable: false,
      clientUrl: null,
      descrip:
        "Novice designers want to improve their design skills, but feel limited by their lack of familiarity with software and don’t understand its full potential. I conducted a design sprint to explore a product opportunity in furthering Figma's mission of democratising design and design education, specifically by helping busy novice designers learn.",
      mainTag: 'Product design',
      tags: ['User research', 'UI/UX', 'Prototyping', 'Figma', 'Adobe XD'],
      image: figma,
    },
    {
      tagline: 'AT Mobile Redesign Sprint',
      title: 'Aiming for frictionless public transport in Auckland.',
      titleClickable: true,
      titleUrl: 'http://isabel.li/at-mobile',
      descrip:
        'Mobility is integral to work, education, and community. Knowing this is an issue which affects a significant population of Auckland city, I endeavoured to redesign the UI/UX and overall product for a more frictionless commute.',
      mainTag: 'Product design',
      tags: ['User research', 'UI/UX', 'Wireframing', 'Figma'],
      image: atmobile,
    },
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
        'With what seems like the end of quarantine in sight, people are yearning to move around and travel. Whether it’s to meet friends and family or to expand horizons, we sought to provide a fun and relaxing way for passengers to find a deeper connection and understanding of their destination.',
      mainTag: 'Product design',
      tags: ['User research', 'UI/UX', 'Prototyping', 'Adobe XD'],
      image: horizon,
    },

    {
      tagline: 'Personal Visual Investigation',
      title: 'How do youth feel heard in a digital vacuum?',
      titleClickable: true,
      titleUrl: 'http://isabel.li/audacity',
      descrip:
        'A visual investigation into youth voice and expression of contemporary youth issues, as well as the digital distortion of these voices as we navigate a social landscape now inseparable from the internet. A series of digital and traditional paintings.',
      mainTag: 'Fine art',
      tags: [
        'Oil',
        'Gouache',
        'Clip Studio Paint',
        'Woodworking',
        'Digital humanities',
      ],
      image: audacity,
    },

    {
      tagline: 'How We Fall Apart Character Card Illustrations',
      title: 'Visualising Asian Americans in dark academia.',
      titleClickable: true,
      titleUrl: 'http://isabel.li/how-we-fall-apart',
      descrip:
        "I designed character cards for Katie Zhao's upcoming young adult thriller focused on teenage Asian Americans at a mysterious prep school - cards to be distributed for her preorder campaign!",
      mainTag: 'Illustration',
      tags: [
        'Clip Studio Paint',
        'Adobe Photoshop',
        'Illustrating for print',
        'Asian diaspora',
      ],
      image: hwfa,
    },
    {
      tagline: 'Around the World!: Charity Zine for Puerto Rico',
      title: 'How can an anime fandom aid hurricane victims?',
      titleClickable: false,
      titleUrl: null,
      descrip:
        'In 2017, I directed and fulfilled a zine project, bringing 40 artists together internationally to produce and sell a My Hero Academia illustration book with a theme of cultural diversity and global travel. All proceeds went towards relief for Puerto Rico in the aftermath of Hurricane Maria.',
      mainTag: 'Project Management',
      tags: [
        'Illustration',
        'Graphic design',
        'Adobe Photoshop',
        'Adobe InDesign',
        'Marketing',
        'Publishing',
        'eCommerce',
        'Order fulfilment',
        'Non-profit',
      ],
      image: zine,
    },
    {
      tagline: 'Sunburst Shack Packaging Design - Contract',
      title: 'Aloha from your coffee cup!',
      titleClickable: true,
      titleUrl: 'http://isabel.li/sunburst-shack',
      descrip:
        'I created packaging designs for Sunburst Shack, a food truck serving Hawaiian coffee and shaved ice, with the intention of staying true to Aloha. Deliverables included coffee cup, menu, and food truck decal designs, fulfilled through Innovative Design @ Berkeley. ',
      mainTag: 'Packaging Design',
      tags: ['Illustration', 'Adobe Photoshop', 'Adobe Illustrator'],
      image: sunburst,
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
                Here are some problems I've been investigating and growing
                through.
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
        <Socials />
        <Footer />
      </main>
    </div>
  );
};

export default Design;
