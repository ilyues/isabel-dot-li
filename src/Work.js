import { React, useEffect, useState } from 'react';
import './styles/app.css';
import './styles/work.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Socials from './components/socials';
import ProjectItem from './components/proj';
import cofed from './images/work/cofed-thumb.png';
import proact from './images/work/proact/proact-coverimage.png';
import audacity from './images/work/audacity-thumb.png';
import atmobile from './images/work/atmobile.png';
import hambur from './images/work/hambur.png';
import hwfa from './images/work/hwfa/hwfa-cover.png';
import zine from './images/work/zine/cover.png';
import sunburst from './images/work/sunburst/index.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

// markup
const Work = () => {
  /*  const [selectDesign, setSelectDesign] = useState(false);
  const [selectProduct, setSelectProduct] = useState(false);
  const [selectArt, setSelectArt] = useState(false);
  const [selectWeb, setSelectWeb] = useState(false);
  const [selectNonProfit, setSelectNonProfit] = useState(false);
  const [selectAsianDiaspora, setAsianDiaspora] = useState(false);
  const [filteredProjs, setFilteredProjs] = useState([]);

  const filterTags = (proj) => {
    const projTags = proj.tags.push(proj.mainTag);
    if (selectDesign) {
      if (
        projTags.includes('Product design') ||
        projTags.includes('Packaging design')
      ) {
        return true;
      }
    } else if (selectProduct) {
      if (
        projTags.includes('Product design') ||
        projTags.includes('Project management')
      ) {
        return true;
      }
    } else if (selectArt) {
      if (projTags.includes('Fine art') || projTags.includes('Illustration')) {
        return true;
      }
    } else if (selectWeb) {
      if (projTags.includes('Web dev')) {
        return true;
      }
    } else if (selectNonProfit) {
      if (projTags.includes('Non-profit')) {
        return true;
      }
    } else if (selectAsianDiaspora) {
      if (projTags.includes('Asian diaspora')) {
        return true;
      }
    } else {
      return false;
    }
  };

  const getProjsArray = () => {
    const projsList = miniProjs.filter(filterTags);
    if (projsList.length == 0) {
      setFilteredProjs(miniProjs);
    } else {
      setFilteredProjs(projsList);
    }
    return filteredProjs;
  }; */
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  // mini projs - move to airtable or something, eventually
  const miniProjs = [
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
      tagline: '#HackForGood Accenture',
      title: 'How can we design more accurate disaster responses?',
      titleClickable: true,
      titleUrl: 'http://isabel.li/proact',
      descrip:
        'In a team of four, I designed a dashboard and companion app for crisis response charity Save The Children to streamline response design and identify victim needs.',
      mainTag: 'Product design',
      tags: ['Figma', 'Wireframing', 'Prototyping', 'Non-profit'],
      image: proact,
    },
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
      tagline: 'Parents Are Human Browser Version',
      title:
        'Bridging the language barrier for inter-generational immigrant families, long distance.',
      titleClickable: true,
      titleUrl: 'https://parentsarehuman.com/',
      descrip:
        'Currently bringing to life a browser version of the Parents Are Human bilingual connection card game, originally targeted at Chinese/Taiwanese-American families, but now extending to other languages.',
      mainTag: 'Web dev',
      tags: ['Product design', 'React.js', 'Figma', 'Asian diaspora'],
      image:
        'https://parentsarehuman.com/wp-content/uploads/brizy/1541/assets/images/iW=5000&iH=any/Parents-Are-Human-Website-Banner-Image-min-1200x630-Social-Preview.png',
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
        <Socials />
        <Footer />
      </main>
    </div>
  );
};

export default Work;
