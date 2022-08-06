import { React, useEffect } from 'react';
import './styles/desproj.css';
import cover from './images/work/canva/Hello1.gif';
import canva1 from './images/work/canva/canva1.gif';
import canva2 from './images/work/canva/canva2.gif';
import canva3 from './images/work/canva/canva3.gif';
import thatsme from './images/work/canva/thatsme.png';
import isabel1 from './images/work/canva/isabel1.gif';
import isabel2 from './images/work/canva/isabel2.gif';
import isabel3 from './images/work/canva/isabel3.gif';
import isabel4 from './images/work/canva/isabel4.gif';
import Footer from './components/footer';
import Navbar from './components/navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TextLoop from 'react-text-loop';

const Canva = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <main style={{ padding: '0' }} className='desproj'>
      <title>Canva</title>
      <Navbar />

      <div className='desproj-container'>
        <img src={cover} alt='Cover'></img>
        <div>
          <b>I’m Isabel, a developer, designer,</b> and{' '}
          <b>all-round creative</b> from Auckland, New Zealand. I’m also a
          first-year pursuing a Computer Science degree from UC Berkeley - my
          vision is to <b>empower creators</b> and <b>uplift communities</b>{' '}
          through technology.
          {/* <img src={thatsme} alt='A picture of me!'></img> */}
          <p>
            I’ve been looking for an “unconventional” internship this winter
            break between mid-May and August, and would love, love, <i>love </i>
            the opportunity to do some work for Canva, especially in either a
            product management or product design role.{' '}
          </p>
          <b>
            Keep reading to learn why I want to cross the Tasman Sea and work
            with you, and why I think we’d make a great team!
          </b>
        </div>
        <div
          className='desproj-container'
          style={{ marginTop: '80px', marginBottom: '20px' }}
          data-aos='fade-up'
        >
          <svg
            viewBox='0 0 500 500'
            width='100%'
            id='blobSvg'
            className='canva-blob'
            style={{
              position: 'absolute',
              left: '-45vw',
              width: '50vw',
              top: '10vh',
            }}
          >
            <path
              id='blob'
              d='M354,287Q352,324,335.5,392.5Q319,461,247.5,469Q176,477,141.5,415.5Q107,354,67.5,302Q28,250,73,202Q118,154,155,113.5Q192,73,240,103.5Q288,134,366.5,121.5Q445,109,400.5,179.5Q356,250,354,287Z'
              fill='none'
              stroke-width='10px'
              stroke='#fdcb6e'
            ></path>
          </svg>
          <span
            style={{
              fontSize: '40px',
              lineHeight: '48px',
              fontWeight: '400',

              textDecorationLine: 'underline',
              textDecorationStyle: 'wavy',
              textDecorationColor: 'rgb(255, 93, 71)',
              textDecorationThickness: '3px',
              textUnderlineOffset: '2px',
            }}
          >
            Let's take a look: <br /> Why is Canva the place for me?
          </span>
        </div>

        <div data-aos='fade-up' className='desproj-container'>
          <img src={canva1} alt='1. Canva champions creativity'></img>

          <div className='desproj-container'>
            <div>
              <p>
                The entire concept of Canva pushes for a more creative world:
                you are empowering people to create great graphics, to
                communicate and connect with an audience in fresh ways, to pick
                up effective visual design even if they previously thought they
                didn't have the skill to.
              </p>
              <p>
                <b>
                  This aligns with what I'm most enthusiastic about, and
                  arguably the sole reason I jumped into tech at all: empowering
                  artists, designers, and anyone who wants to create.
                </b>
              </p>
              <p>
                Often, people who knew me in high school are shocked to learn I
                study computer science (I had never taken any relevant classes
                up until uni, and in general on a surface level it seemed quite
                out of character.) I was mostly an artist, who also liked
                communications and journalism work. It seemed like a last-minute
                decision I made in Year 13, but in reality, I'd experienced a
                profound change in how I saw technology, which sparked the
                trajectory of my new career goals.
              </p>
              <p>
                Creative software was crucial to my art and design arsenal.
                Marketing and communications depended on social media. Even
                keeping connected meant conversations and collaboration online.
                I viewed softwares as tools which had a great impact on my
                inspiration and ability to do the things I was passionate about;
                making art, and uplifting communities.
              </p>
              <p>
                This led my pivot to computer science: I want to make digital
                products which enables others to pursue creativity and hearten
                their communities too. All the coding stuff? No sweat; I would
                figure it out in the process, but my destination was defined and
                set.
              </p>
              <p>
                <b>
                  Canva is doing exactly what I had in mind when I took that
                  leap of faith into a foreign field, and that's why it's where
                  I want to be.
                </b>
              </p>
            </div>
          </div>
        </div>

        <div data-aos='fade-up' className='desproj-container'>
          <img
            src={canva2}
            alt="2. Inclusivity is at the core of Canva's mission"
          ></img>

          <div className='desproj-container'>
            <div>
              <p>
                One thing that really sets Canva apart from other creative
                software for me is its accessibility at multiple levels.
              </p>
              <p>
                First of all, <i>it's free.</i> As unsentimental as that sounds,
                there are way too many creative tools (and subsequently,
                creative roles) gatekept by a high price point. People should be
                able to make sleek, professional designs without forking out
                hundreds for a highly technical programme. Students and
                newcomers to design should be able to make experiment and make
                cool graphics without committing to software they can't afford!
                I love that Canva has a Free (forever!) option and easy
                no-install browser app that lowers the barriers.
              </p>
              <p>
                Leading on from that, I particularly like how Canva extends a
                hand to those who aren't necessarily creatives by profession.
                With the convenient and intuitive drag-and-drop model, anyone
                can be a designer with Canva. While other programmes are
                continuously specialising and narrowing the scope of their
                services — this for GIFs, that for video, that other one for
                PDFs — Canva focuses on ease of use and brings a range of
                solutions into one place.{' '}
                <b>
                  I appreciate that Canva opens the design space and demystifies
                  creativity for those who are less confident in their skills.
                </b>
              </p>
              <p>
                Finally, I like how the services and assets Canva offers are
                designed with a tacit but important tone of inclusion for
                marginalised communities; whether it's the array of
                BIPOC-inspired stickers on offer or the Pride event template on
                the landing page, <b>Canva diffuses a culture of inclusion.</b>{' '}
              </p>
            </div>
          </div>
        </div>

        <div data-aos='fade-up' className='desproj-container'>
          <svg
            viewBox='0 0 500 500'
            className='canva-blob'
            style={{
              position: 'absolute',
              right: '-45vw',
              width: '50vw',
              top: '-40vh',
            }}
            width='100%'
            id='blobSvg'
          >
            <path
              id='blob'
              d='M445.5,322Q449,394,380.5,418Q312,442,260.5,409.5Q209,377,153.5,368.5Q98,360,121.5,305Q145,250,117,191.5Q89,133,142.5,109Q196,85,253.5,74Q311,63,346,109Q381,155,411.5,202.5Q442,250,445.5,322Z'
              fill='none'
              stroke-width='10px'
              stroke='#3db7bb'
            ></path>
          </svg>
          <img src={canva3} alt='3. Canva is a force for good'></img>
          <div className='desproj-container'>
            <div>
              <p>
                My friends have often considered me idealistic or unusually
                focused on company values, but the way I see it,{' '}
                <b>I'm just looking to join a team that serves public good.</b>
              </p>
              <p>
                I'm really excited about Canva's initiatives in several areas,
                especially:
                <ul>
                  <li>
                    partnerships with Learn to Code, Women Who Code, and Code
                    Like a Girl
                  </li>
                  <li>Canva Print's commitment to sustainability</li>
                  <li>
                    engagement with BIPOC creators to produce diverse content.
                  </li>
                </ul>
                I also value Canva's special subscriptions for students,
                teachers, and non-profits!
              </p>
              <p>
                My own personal concerns are often centred towards LGBTQ+
                awareness and advocacy, dismantling systemic racism, empowering
                women and non-binary folks, and bridging access to resources for
                underprivileged communities.{' '}
                <b>
                  I want to be part of a space which has an awareness of global
                  issues and recognises its own responsibility to speak out and
                  make moves.
                </b>
              </p>
            </div>
          </div>
        </div>
        <div className='desproj-container' data-aos='fade-up'>
          <p>
            These are the three most important reasons I want to be a part of
            Canva's mission. Next, here are some explanations for why I think
            we'd synergise.
          </p>
          <span
            className='canva-loop'
            style={{
              fontSize: '40px',
              lineHeight: '48px',
              fontWeight: '400',
              marginTop: '80px',
              marginBottom: '20px',
              textDecorationLine: 'underline',
              textDecorationStyle: 'wavy',
              textDecorationColor: 'rgb(255, 93, 71)',
              textDecorationThickness: '3px',
              textUnderlineOffset: '2px',
            }}
          >
            So, why should you hire me?
          </span>
        </div>
        <div data-aos='fade-up' className='desproj-container'>
          <svg
            viewBox='0 0 500 500'
            className='canva-blob'
            style={{
              position: 'absolute',
              left: '-50vw',
              width: '50vw',
              bottom: '40vh',
            }}
            width='100%'
            id='blobSvg'
          >
            <path
              id='blob'
              d='M386.5,310.5Q417,371,349,358.5Q281,346,235.5,390.5Q190,435,144.5,397.5Q99,360,103,305Q107,250,86,183Q65,116,132,105Q199,94,260.5,61.5Q322,29,372,77Q422,125,389,187.5Q356,250,386.5,310.5Z'
              fill='none'
              stroke-width='10px'
              stroke='#fb594a'
            ></path>
          </svg>
          <img
            src={isabel2}
            alt="I'll make a caring addition to your team"
          ></img>
          <div className='desproj-container'>
            <div>
              <p>
                Once I was interviewing for a club, and they asked me if I had
                anything that I really wanted to reiterate before the call
                ended. My answer? "Inclusivity is really important to me. I want
                to contribute to an environment where everyone feels welcome."
              </p>
              <p>
                I enjoy meeting new people and hearing about their experiences;
                I take care to approach everything with empathy, patience, and
                an open mind. I love that Canva actively takes steps to create a
                healthy workplace with gender-inclusive language, and and
                undertakes external initiatives which show commitment to
                uplifting women and BIPOC; this is the kind of space I want to
                uphold!
              </p>
              <p>
                Additionally, as shown in the points above, I'm super passionate
                about what Canva is doing for students, teachers, social media
                marketers... the list goes on! If you're looking for someone who
                really cares about your product and its powerful impact, I'm
                right here.
              </p>
              <p>
                I'm absolutely someone whose top priority while entering the
                tech industry is <b>purpose</b> — I need to work on something I
                truly believe in to be fulfilled. I also think this is
                ultimately what creates a better product; having people on your
                team who really want to improve and push the product in new
                directions.
              </p>
              <p>
                <b>
                  I care about people, and I care about what Canva does. I'll
                  bring boundless energy and empathy to your team.{' '}
                </b>
              </p>
            </div>
          </div>
        </div>
        <div data-aos='fade-up' className='desproj-container'>
          <svg
            viewBox='0 0 500 500'
            width='100%'
            className='canva-blob'
            style={{
              position: 'absolute',
              right: '-55vw',
              width: '50vw',
              bottom: '-10vh',
            }}
            id='blobSvg'
          >
            <path
              id='blob'
              d='M390.5,308.5Q411,367,347.5,360.5Q284,354,251.5,350.5Q219,347,156.5,355.5Q94,364,49.5,307Q5,250,45.5,190.5Q86,131,137.5,96.5Q189,62,243,84Q297,106,334.5,134Q372,162,371,206Q370,250,390.5,308.5Z'
              fill='none'
              stroke-width='10px'
              stroke='#fd84a9'
            ></path>
          </svg>
          <img src={isabel4} alt="I'm a problem solver at my core."></img>

          <div className='desproj-container'>
            <div>
              <p>
                I've wielded anime fandoms as a way of raising money for
                disaster relief, I've teamed up with other young people to build
                a web app connecting food and land cooperatives.
              </p>
              <p>
                Although my ventures into product-related careers have been
                recent, I spent my high school years focused on design (I
                thought I was going to become an architect and civil engineer —
                oops!) and{' '}
                <b>
                  the user-focused skills I've acquired can be applied anywhere.
                </b>
              </p>
              <p>
                I've sought out creative solutions for engineering and design
                problems alike, or simply things I wanted to change in my world:
                <ul>
                  <li>
                    I entered teams in the national NZ Engineering Science
                    competition, achieving highly commended and then 2nd place
                    for our research, mathematical models, and solutions to{' '}
                    <i>
                      'How many tonnes of CO2 emissions could be avoided in your
                      lifetime if New Zealand transitions to a completely
                      electric vehicle fleet?'
                    </i>{' '}
                    and{' '}
                    <i>
                      'If you had a million dollars to spend on online
                      marketing, what percentage of the NZ population could you
                      persuade to sign a petition that you wanted championed?'
                    </i>
                    , respectively.
                  </li>
                  <li>
                    I came 1st in the world in Cambridge AS Level Design and
                    Technology for my year-long cultural character design
                    project, and 1st in New Zealand for my A Level Design and
                    Technology year-long creative architectural project.
                  </li>
                  <li>
                    I founded the LGBTQ+ Rights club at my high school, creating
                    an unprecedented sense of community and acceptance in an
                    otherwise slightly conservative school which formally
                    treated the topic as taboo.
                  </li>
                </ul>
              </p>
              <p>
                <b>
                  There's nothing I like to do more than helping people, and
                  figuring out how to make our world better.
                </b>{' '}
                I'd love to bring this outlook to Canva, and continue solving
                the problems of your users.
              </p>
            </div>
          </div>
        </div>
        <div data-aos='fade-up' className='desproj-container'>
          <img src={isabel3} alt='I understand the people Canva serves.'></img>

          <div className='desproj-container'>
            <div>
              <p>
                I'll be upfront about it — as someone who <i>does</i> have a
                good grasp of more 'low-level' creative software like the Adobe
                suite, I won't use Canva myself for every project I make.
                However, I've always been working in roles where either my peers
                or I needed to produce the graphics Canva supports.
              </p>
              <p>
                I've been the voluntary go-to graphic designer for clubs in high
                school, the communications and social media manager for my local
                youth council, a brand designer for community businesses,
                organised a charity zine for print, and observed friends who
                aren't so technically familiar with motion graphics -making or
                setting up a file for print struggle with these tasks.{' '}
                <b>I understand the journeys and goals of Canva's users.</b>
              </p>

              <p>
                The decisions I make will, of course, involve great amounts of
                research — there are so many lived experiences I can't possibly
                imagine and need to spend time understanding, sympathising,
                synthesising. Still, as a product-maker,{' '}
                <b>
                  my experiences and creative dimension uniquely informs and
                  strengthens my perception of Canva, and how it can meet its
                  users' needs.
                </b>
              </p>
            </div>
          </div>
        </div>

        <div data-aos='fade-up' className='desproj-container'>
          <svg
            viewBox='0 0 500 500'
            className='canva-blob'
            style={{
              position: 'absolute',
              left: '-55vw',
              width: '50vw',
              top: '10vh',
            }}
            width='100%'
            id='blobSvg'
          >
            <path
              id='blob'
              d='M442.5,322.5Q450,395,375,400Q300,405,250.5,402.5Q201,400,143,385Q85,370,83,310Q81,250,79,187Q77,124,129,80.5Q181,37,243.5,57.5Q306,78,319.5,134Q333,190,384,220Q435,250,442.5,322.5Z'
              fill='none'
              stroke-width='10px'
              stroke='#a29bfe'
            ></path>
          </svg>
          <img
            src={isabel1}
            alt="I'm ready to go forth and do whatever it takes!"
          ></img>
          <div className='desproj-container'>
            <div>
              <p>
                One year ago, I was printing "hello world" in my terminal. Six
                months ago, my mentors introduced me to Figma and React.js for
                the first time. Earlier this year, I learnt what product design
                and product management <i>meant</i> (and that they sound like
                things I want to explore further!) Now, take a look at this
                website I've handcoded, or some of{' '}
                <a href='http://isabel.li/work' target='_blank'>
                  my recent projects
                </a>
                , and see how much I've been proud to learn! The past year has
                been a lot of reckoning the unfamiliar, but that in itself is
                nothing new.
              </p>
              <p>
                Whether it's picking up the bandsaw or creating motion graphics
                for the first time, I dive right in with the mindset that{' '}
                <b>I can do it</b>, even if that means expending time and effort
                to broaden my comfort zone, or not getting it right the first
                time. I have the capacity to learn anything — it's up to me to
                take the initative, and put in the work.
              </p>

              <p>
                I'm sure that taking a role at Canva means I'll be challenged to
                grow and encounter things I've never done before. But that's no
                problem — what I don't know yet, I'm always ready to learn
                hands-on!
              </p>
            </div>
          </div>
        </div>

        <div className='desproj-container'>
          <div /* data-aos='fade-up' */ className='desproj-content'>
            <span className='canva-loop'>
              I'd love to work, learn, and grow with you — together, let’s {''}
              <TextLoop
                children={[
                  'make great design accessible',
                  'empower creatives of all skill levels',
                  'deliver convenience',
                ]}
                springConfig={{ stiffness: 180, damping: 12 }}
                adjustingSpeed={200}
                interval={2500}
              ></TextLoop>
              .
            </span>
            <p>
              <a
                href='https://www.dropbox.com/s/r3b9vzqokpzll08/ISABEL%20LI%20RESUME%20%3A%20SP21%20.pdf?dl=0'
                target='_blank'
              >
                Resume 🚀
              </a>{' '}
              |{' '}
              <a href='mailto:isabel.yueli@gmail.com' target='_blank'>
                Let's keep in touch! 📧
              </a>{' '}
              | Feel free to explore my site!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Canva;
