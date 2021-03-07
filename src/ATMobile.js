import * as React from 'react';
import './styles/desproj.css';
import chart from './images/work/atmobile/agedemchart.png';
import appreviews from './images/work/atmobile/appreviews.png';
import userinterviews from './images/work/atmobile/userinterviews.png';
import userstories from './images/work/atmobile/userstories.png';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Socials from './components/socials';

const ATMobile = () => {
  return (
    <main className='desproj'>
      <title>about Isabel 🖍️</title>
      <Navbar />

      <div className='desproj-container'>
        hello!
        <div className='desproj-titlebox'>
          <div className='desproj-title'>
            <h5>AT Mobile App Redesign Sprint</h5>
          </div>
          <div className='desproj-details'>
            <h6>Team:</h6>Individual; user researcher, UI/UX designer, product
            designer.
            <p>
              <h6>Tools:</h6> Figma
            </p>
            <p>
              <h6>Timeline:</h6> 3 days, 3-6 Mar 2021
            </p>
          </div>
        </div>
        <div className='desproj-content'>
          <div className='desproj-tagline'>
            A stressful commute calls for streamlined redesign.
          </div>
          <p>
            The AT Mobile App is the official app associated with Auckland
            Transport, the council-controlled organisation of Auckland Council
            responsible for transport projects and services.{' '}
          </p>
          <p>
            As someone who needs public transport to get around my hometown,
            I’ve had my own frustrations using this app to plan and track my
            journeys, often leading to late arrivals or unnecessary anxiety when
            travelling.{' '}
            <b>Mobility is integral to work, education, and community.</b>{' '}
            Knowing this is an issue which affects a significant population of
            Auckland city, I endeavoured to redesign the UI/UX and overall
            product for a more frictionless commute.
          </p>
        </div>
        <div className='desproj-content'>
          <div className='desproj-header'>
            Overview
            <br />
            <span className='desproj-headertag'>
              Problem, process, outcome.
            </span>
          </div>
          <p>To be filled.</p>
        </div>
        <div className='desproj-content'>
          <div className='desproj-header'>
            Understanding Auckland's commuters.
            <br />
            <span className='desproj-headertag'>
              Demographic context and user research.
            </span>
          </div>
          <div className='desproj-subheader'>Demographic Context</div>
          <p>
            I began very broadly by gathering information available from
            official sources about the user demographic of public transport in
            Auckland. I believed this would be valuable as initial context, and
            act as a starting point so I can break down potential app users into
            main age groups and characters.
          </p>
          <img
            src={chart}
            alt='Journey to Education by Age Group, 2018 Census Data'
          />
          <p>
            From analysis of Auckland’s 2018 census data, I found that in the
            past decade there has been a consistent increase in public transport
            uptake for both journeys to work and to education — in 2018
            specifically, the percentage of public transport users totalled to
            14.6%. Breaking this down by age, public transport use to education
            was highest for those over 17, closely followed by the 13-17 age
            range.
          </p>
          <p>
            <div className='desproj-tagline'>
              These statistics signalled a large portion of public transport
              users to be tertiary students.
            </div>
          </p>

          <div className='desproj-subheader'>User Research</div>
          <p>
            Given the limited timeline of this project, I focused on gathering
            information on commuters’ experiences of using the app in two main
            ways:
            <span style={{ fontSize: '22px', lineHeight: '30px' }}>
              <ul>
                <li>
                  <b>App reviews,</b> so I can take a look at a large cross
                  section of users and existing complaints and priorities
                  specifically regarding the app. I also hoped to find more
                  common concerns shared by the app’s user base.
                </li>
                <br />
                <li>
                  <b>User interviews,</b> so I could talk to real users and gain
                  an understanding of specific user stories and the different
                  ways people use the app to aid their commute. I was also able
                  to easily ask follow up questions or discover more about their
                  experience in detail.
                </li>
              </ul>
            </span>
            I decided not to send out user surveys as they wouldn’t offer any
            different insights to the user interviews, and it would not have
            been a good use of time to create useful surveys, send them out, and
            expect many responses within the one day I had allocated for
            research.
          </p>
          <p>
            I also considered analysis of standalone comments and opinions
            posted on social media such as Twitter or Reddit, but a quick search
            showed that there was limited source material, and that the comments
            I did find were scarce in detail and not particularly meaningful to
            my research.
          </p>
          <div className='desproj-subheader2'>App Reviews</div>
          <p>
            I looked to app reviews on both the Google Play Store and iOS App
            Store to find user input on the app’s usability. There were many
            vague reviews expressing frustration with the app, as well as some
            indicating gratitude for its usefulness in planning journeys. I
            focused on reviews which noted distinct app features or user
            journeys.
          </p>
          <p>
            I mostly looked for reviews which were recent (submitted in the last
            ~6 months) and therefore relevant to the newest versions of the app,
            as well as reviews which, on the Google Play Store, were rated by
            other users to be representative of their experiences as well.
          </p>
          <p>
            After analysing nearly all the recent reviews, I was able to group
            and identify common concerns, as well as discover new niche problems
            and build a clearer picture of the redesign needs.
          </p>
          <img src={appreviews} alt='App Review Analysis' />
          <div className='desproj-subheader2'>User Interviews</div>
          <p>
            To empathise with users and understand their experiences with the
            current app, I conducted six interviews over video call. I chose to
            do six interviews due to time constraints, and also because I
            believed that from these few interviews I would still be able to
            extract the majority of problems faced by app users.
          </p>

          <p>
            <b>
              I also decided to limit my scope at this point of the design
              process;
            </b>{' '}
            while I had initially been wanting to target issues faced by
            Auckland commuters of all demographics (including the elderly
            Chinese immigrants who often use the buses in my suburban area, and
            commuters from low-income neighbourhoods who cannot afford a private
            vehicle) I realised that with the given time and lockdown
            circumstances it would be difficult for me to find a diverse age
            range of interviewees who could participate within the next day.
          </p>
          <div className='desproj-tagline'>
            My new focus would primarily be on students and young adults, who
            make up the primary patronage of Auckland Transport.
          </div>
          <img src={userinterviews} alt='User Interview Breakdown' />

          <p>
            Overall, it was important to keep the interview conversational and
            open-ended; I wanted to learn about which parts of the experience
            the users considered most significant or memorable and naturally
            felt compelled to comment on. I also wanted to keep an open mind;
            the interviews would shed light on areas of the app which I hadn’t
            personally considered needing improvement, and knew I wouldn’t be
            able to access these insights with constricting, directed questions.
          </p>
          <p>
            Following this, I was able to create user stories to begin
            clarifying who I was designing the app for. I grouped these into
            common tasks which would lead to revisions for different sections of
            the app.
          </p>
          <img src={userstories} alt='User Stories' />

          {/* TODO: <div className='desproj-subheader2'>Key Insights</div> */}
        </div>
        <div className='desproj-content'>
          <div className='desproj-header'>
            Investigating the Status Quo.
            <br />
            <span className='desproj-headertag'>
              Product analysis, competitor research.
            </span>
          </div>
        </div>
        <div className='desproj-content'>
          <div className='desproj-header'>
            User Personas
            <br />
            <span className='desproj-headertag'>Who are we designing for?</span>
          </div>
        </div>
        <div className='desproj-content'>
          <div className='desproj-header'>
            Revising the Problem
            <br />
            <span className='desproj-headertag'>
              Redefining users' design needs and opportunities.
            </span>
          </div>
        </div>
        <div className='desproj-content'>
          <div className='desproj-header'>
            Ideation
            <br />
            <span className='desproj-headertag'>
              Brainstorming, concept visualisation, concept evaluation.
            </span>
          </div>
        </div>
        <div className='desproj-content'>
          <div className='desproj-header'>
            Solutions
            <br />
            <span className='desproj-headertag'>
              The proposed answers to our questions.
            </span>
          </div>
        </div>
        <div className='desproj-content'>
          <div className='desproj-header'>
            Looking back, looking ahead.
            <br />
            <span className='desproj-headertag'>
              Learnings and what's next for this project.
            </span>
          </div>
        </div>
      </div>

      <Socials />
      <Footer />
    </main>
  );
};

export default ATMobile;
