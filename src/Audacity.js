import { React, useEffect } from 'react';
import './styles/desproj.css';
import overview from './images/work/audacity/coverimage.png';
import cover from './images/work/audacity/cover.png';

import prop1 from './images/work/audacity/prop1.png';
import prop2 from './images/work/audacity/prop2.png';
import prop3 from './images/work/audacity/prop3.jpg';

import art1 from './images/work/audacity/art1.jpg';
import art2 from './images/work/audacity/art2.jpg';
import art3 from './images/work/audacity/art3.jpg';
import art4 from './images/work/audacity/art4.jpg';
import art5 from './images/work/audacity/art5.jpg';
import art6 from './images/work/audacity/art6.jpg';
import art7 from './images/work/audacity/art7.png';
import art8 from './images/work/audacity/art8.png';
import art9 from './images/work/audacity/art9.jpg';
import art99 from './images/work/audacity/art9.png';
import art55 from './images/work/audacity/art55.jpg';
import art10 from './images/work/audacity/art10.jpg';
import art11 from './images/work/audacity/art11.jpg';
import art12 from './images/work/audacity/art12.png';
import art13 from './images/work/audacity/art13.jpg';

import installation from './images/work/audacity/installation.png';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Socials from './components/socials';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Audacity = () => {
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
              Audacity:
              <br />A Visual Exploration
            </h5>
          </div>
          <div className='desproj-details'>
            <h6>Purpose(s):</h6>
            <a
              href='https://www.nzqa.govt.nz/qualifications-standards/awards/new-zealand-scholarship/scholarship-subjects/visual-arts/'
              target='_blank'
            >
              NZQA Scholarship Art
            </a>
            , partially. Then curiosity, and a desire to understand the modern
            world.
            <p>
              <h6>Tools and materials:</h6> Oil paints, watercolour, gouache,
              dye, ink, alcohol markers, fishing wire, 4mm MDF and a 3D router,
              VCarve, Clip Studio Paint, Adobe Photoshop, lots and lots of red
              heart stickers off AliExpress.
            </p>
            <p>
              <h6>Timeline:</h6> May - Oct 2019
            </p>
          </div>
        </div>
        <div data-aos='fade-up' className='desproj-content'>
          <div className='desproj-tagline'>
            This is an investigation into youth voice.
          </div>
          <p>
            In my final year of high school, I became increasingly aware of how
            technology affected my life; not just in the hardware sense of
            carrying a lump of aluminium alloys and gold wiring with me
            whereever I went, but also in the sense that those wires and oxides
            rewrote the way my mind interacted with the world.
          </p>
          <p>
            Penning this now in the pandemic era, where everything seemed to
            shift several bits more over towards a digital reality in the
            shortest span of time, I can't help but feel this documentary was in
            preparation for the world to come. Or rather, the world that was
            already lying in wait, ready for someone to give the all-clear.{' '}
          </p>
          <p>
            Technology is not <i>about</i> apps and websites and robots; it's
            about personal identity, communication, community. Art, culture,
            creation, and destruction. Gender, class, race, ability. It's about
            our society because it is our society. The apps and websites and
            robots are a vessel. It's what we've made out of the human
            experience, and what we're hurtling towards while the earth spins in
            sync as the universe's largest loading screen.
          </p>

          <p>
            For this project, I zeroed in on how technology affects youth
            identity and interaction, synthesising a selection of artist models
            and developing my understanding of this issue. There's much more to
            be explored in regards to tech, but this was my beginning.
          </p>
        </div>
        <div data-aos='fade-up' className='desproj-content'>
          <div class='desproj-galleryrow'>
            <div class='desproj-gallerycol'>
              <img src={art1} alt='Piece 1' />
              <img src={art3} alt='Piece 3' />
              <img src={art5} alt='Piece 5' />
            </div>
            <div class='desproj-gallerycol'>
              <img src={art2} alt='Piece 2' />
              <img src={art4} alt='Piece 4' />
              <img src={art6} alt='Piece 6' />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <img src={art55} style={{ width: '96%' }} alt='Piece 5.5!' />
          </div>

          <div class='desproj-galleryrow'>
            <div class='desproj-gallerycol'>
              <img src={art7} alt='Piece 1' />
              <img src={art9} alt='Piece 3' />
              <img src={art11} alt='Piece 5' />
            </div>
            <div class='desproj-gallerycol'>
              <img src={art8} alt='Piece 2' />
              <img src={art99} alt='Piece 2' />
              <img src={art10} alt='Piece 4' />
              <img src={art12} alt='Piece 6' />
            </div>
          </div>
        </div>
        <div data-aos='fade-up' className='desproj-content'>
          <div>
            <div className='desproj-header'>
              Overview
              <br />
              <span className='desproj-headertag'>
                The starting line, and the journey that followed.
              </span>
            </div>
            <p>
              I developed a project proposal that would contextualise and drive
              the project; the focus of this was the digital experience of young
              people, which I felt was often overlooked as a 'side-effect' of
              life, while it constituted a lot more.
            </p>
            <p>
              My exploration could be divided into four main sections:
              <span style={{ fontSize: '22px', lineHeight: '30px' }}>
                <ul>
                  <li>Suppression.</li>
                  <li>Explosion.</li>
                  <li>Distortion.</li>
                  <li>Censorship.</li>
                </ul>
              </span>
            </p>{' '}
            <p>
              My final body of work consisted of several paintings moving
              through these topics.
            </p>
          </div>
          {/* <div className='desproj-2col'>
            <img
              style={{ maxHeight: '25vw', width: 'auto' }}
              src={art13}
              alt='Piece 13'
            />
            <img
              style={{ maxHeight: '25vw', width: 'auto' }}
              src={installation}
              alt='My installation piece'
            />
          </div> */}

          <img src={overview} alt='An overview of my completed work' />
        </div>
        <div data-aos='fade-up' className='desproj-content'>
          <div className='desproj-header'>
            The Proposal
            <br />
            <span className='desproj-headertag'>My point of focus.</span>
          </div>
          <p>
            <b>THIS IS AN INVESTIGATION INTO YOUTH VOICE</b> and expression of
            contemporary youth issues, as well as the digital distortion of
            these voices as we navigate a social landscape now inseparable from
            the internet.{' '}
          </p>
          <div className='desproj-2col'>
            <div>
              <p>
                This point of interest is a culmination of my recent
                observations of frustrated groups and individuals -- most
                notably (and perhaps strangely) an article I read about the
                spectacular commercial failure of Target’s Canadian expansion.
                This article in particular overlaid the embedded images with
                blood-red, graffiti-like quotes - a presentation which matched
                the desperation and anguish of the quoted content. It struck me
                that despite the intangible nature of the issue (corporate
                collapse!) the emotions associated with the issue are just as
                intense and visceral, although almost never presented as such in
                public.
              </p>
            </div>
            <img
              style={{
                width: '12vw',
                paddingLeft: '20px',
                paddingRight: '20px',
              }}
              src={prop1}
              alt='A screenshot from the Target Canada article'
            />
            <img
              style={{
                width: '12vw',
                paddingLeft: '20px',
                paddingRight: '20px',
              }}
              src={prop2}
              alt='Another screenshot of the Target Canada article'
            />
          </div>
          <p>
            A trip to Paris this past November during the gilets jaunes’ riots,
            in combination with the recent climate change strikes, provided my
            understanding of what public outcry looks like; people united by the
            same dissatisfaction to give that dissatisfaction a voice.
          </p>{' '}
          <div className='desproj-2col'>
            <img
              style={{
                width: '20vw',
                paddingRight: '20px',
                paddingLeft: '20px',
              }}
              src={prop3}
              alt='A photo I took in Paris'
            />
            <div>
              <p>
                {' '}
                But what of frustration on an individual level? The marriage of
                these two ideas - of more ‘abstract’ issues often being
                truncated in their perceived emotional effect, and of public
                voices dominating the the attention economy - lends the thought
                that as youth grow with a digital, inherently intangible
                component to their lives, their private problems and underlying
                emotions dip further into obscurity. It aligns with my
                experiences on the local youth council this year as we grapple
                with confronting contemporary youth issues, which I’ve
                discovered are more to do with feeling unheard and uncertain
                than practical problems with visible solutions. It brings to
                mind this year’s theme of our annual youth week: we are more
                than you see.
              </p>
            </div>
          </div>
          <p>
            It’s impossible not to consider the role of online platforms in
            producing this culture of smothered silence. Those who don’t use
            social media as extensively as our youth do today (and it must be
            noted that social media serves as a vessel for regular aspects of
            our lives, not a vague, foreign intrusion which replaces and
            distracts from the now!) often mistake the ubiquity of these
            platforms as an expansion of opportunities for us to express
            ourselves. My own personal assessment of my experiences online,
            especially as a young artist interested in growing an audience,
            networking, and reaching others through my work, suggests that the
            ever-expanding digital universe only makes it easier for our voices
            to be projected into a vacuum. To be (or arguably more importantly,
            feel) heard is not simply to have the space to speak, but to be
            heard above everyone else - and in a digital world which lends to
            infinitely many voices, a world saturated in noise, we often feel
            smaller than ever.
          </p>
          <p>
            <b>MY INTENT</b> is to present the modern context of youth
            expression, and a study of its suppression and distortion. Without a
            physical form our voices and opinions seem brittle, but the
            simmering emotions beneath the surface must be recognised as equally
            potent, and equally powerful, as those which take form in riots,
            vandalism, and violence.
          </p>
        </div>
        {/* <div data-aos='fade-up' className='desproj-content'>
          <div className='desproj-header'>
            Solutions
            <br />
            <span className='desproj-headertag'>
              The proposed answers to our questions.
            </span>
          </div>
        </div> */}
      </div>
      <Socials />
      <Footer />
    </main>
  );
};

export default Audacity;
