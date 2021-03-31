import { React, useEffect } from 'react';
import './styles/desproj.css';
import chart from './images/work/atmobile/agedemchart.png';
import appreviews from './images/work/atmobile/appreviews.png';
import userinterviews from './images/work/atmobile/userinterviews.png';
import userstories from './images/work/atmobile/userstories.png';
import brainstorm from './images/work/atmobile/brainstorm.png';
import problemmap from './images/work/atmobile/problemmap.png';
import currinfomap from './images/work/atmobile/currinfomap.png';
import newinfomap from './images/work/atmobile/newinfomap.png';
import atscreenshots from './images/work/atmobile/atscreenshots.png';
import competitors from './images/work/atmobile/competitors.png';
import cover from './images/work/atmobile/coverimage.png';
import lofis from './images/work/atmobile/lofis.png';
import solutions from './images/work/atmobile/solution.png';
import solHome from './images/work/atmobile/sol-home.png';
import solPlan from './images/work/atmobile/sol-plan.png';
import solLive from './images/work/atmobile/sol-live.png';
import solAlert from './images/work/atmobile/sol-alert.png';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Socials from './components/socials';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ATMobile = () => {
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
          <img src={cover}></img>
        </div>
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
              <h6>Timeline:</h6> 3 days, 5-8 Mar 2021
            </p>
          </div>
        </div>
        <div data-aos='fade-up' className='desproj-content'>
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
        <div data-aos='fade-up' className='desproj-content'>
          <div className='desproj-header'>
            Overview
            <br />
            <span className='desproj-headertag'>
              Problem, process, outcome.
            </span>
          </div>
          <p>
            After analysing the product and <b>market research</b>, as well as
            conducting user research through analysis of{' '}
            <b>demographic context</b>,<b>app reviews</b>, and{' '}
            <b>user interviews</b>, I created <b>user stories</b> and{' '}
            <b>synthesised</b> my analyses to refine the design problem.
          </p>
          <p>
            I narrowed the focus to the following aims for the experiences of
            young Aucklanders using the app:
            <ol>
              <li>
                Improve users’ easy management of their AT Hop cards, balance,
                and transactions.
              </li>
              <li>
                Help users make the most of AT Mobile’s diverse features to
                seamlessly plan and embark on their public transport journey.
              </li>
              <li>
                Keep users calm and confident in transportation under unusual
                circumstances, unpredictable service changes, or human error.
              </li>
            </ol>
          </p>
          <p>
            Following this, I ideated with a rapid mindmap visualisation,
            visually reorganising and redesigning my original construction of
            the app's information architecture, and digital wireframing.
          </p>
          <p>
            My product redesign targeted:
            <ul>
              <li>
                sorting and re-presenting the existing app's features to be more
                clear and concise, offering more efficiency and value to the
                user.
              </li>
              <li>
                using the advantages of mobile technology to create a digital AT
                Hop card which can be easily tracked, managed, and updated,
                reducing both physical and mental burdens of remembering to
                carry the card.
              </li>
              <li>
                allowing the user more control; instead of focusing on
                perfecting the tracking technology and inevitable human timing
                errors for non-automated public transport, I looked to remove
                "smart" suggestions/decisions where they weren't accurate or
                helpful, instead putting more options and autonomy in the hands
                of the user.
              </li>
              <li>
                creating a usable live tracking experience which allowed the
                user to multitask away from the app, with shortcuts and clearer
                UI to navigate back to their live trip details.
              </li>
            </ul>
          </p>
          <img src={solutions} alt='My redesign solutions' />
        </div>
        <div data-aos='fade-up' className='desproj-content'>
          <div className='desproj-header'>
            Investigating the Status Quo.
            <br />
            <span className='desproj-headertag'>
              Product analysis, competitor research.
            </span>
          </div>

          <div className='desproj-subheader'>Exploring AT Mobile</div>
          <p>
            Although I use AT Mobile for my transport planning, I decided to
            redownload the app and understand how a new user may experience the
            app, as well as explore all of its features in depth.
          </p>
          <img
            src={atscreenshots}
            alt='Screenshots of the current AT Mobile app'
          />
          <p>
            I noticed that there were a lot of pages and features (some
            particularly useful) I hadn't ever noticed or used before, due to{' '}
            <b>unexpectedly deep nesting of information.</b>
          </p>
          <p>
            During my deliberate probing of the app's different pages, I also
            noticed a pattern of{' '}
            <b>redundant buttons leading to unclear navigation</b>.
          </p>
          <p>
            Another potential pain point was the large number of linked pages
            that would open in AT Mobile's own pop-up browser. As a user I felt
            that if there wasn't a mobile optimised version of the page
            available, I could've simply searched it up in my own preferred
            mobile browser.
          </p>
          <img src={currinfomap} alt='Current App Navigation' />
          <div className='desproj-subheader'>Competition and Comparisons</div>
          <div className='desproj-2col'>
            <img
              style={{ width: '30vw' }}
              src={competitors}
              alt='Competing apps'
            />
            <div>
              <div className='desproj-tagline'>
                I <b>identified competitor products</b> and juxtaposed the AT
                Mobile app with other transport apps to find{' '}
                <b>market advantages</b> and <b>common pain points</b>.
              </div>
              <p>
                I was recommended the Waka web app by another public transport
                user, which seems to implement a Auckland Transport stop search
                with <i>much</i> more simplicity, the only downside being a lack
                of mobile app.
              </p>
              <p>
                I noted that the AT Mobile route search wouldn't always display
                all routes available on Google Maps.
              </p>
              <p>
                Other apps also included copywriting that led to a much more
                intuitive experience of similar features.
              </p>
            </div>
          </div>
        </div>
        <div data-aos='fade-up' className='desproj-content'>
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
            <span className='desproj-emph'>
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
            been realistic to expect many responses within the one day I had
            allocated for research.
          </p>
          <p>
            I also considered analysis of standalone comments and opinions
            posted on social media, but a quick search showed that the limited
            comments I did find were scarce in detail and not particularly
            meaningful.
          </p>
          <div className='desproj-subheader'>App Reviews</div>
          <p>
            I looked to app reviews on both the Google Play Store and iOS App
            Store to find user input on the app’s usability. I focused on
            reviews which noted distinct app features or user journeys.
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
          <div className='desproj-subheader'>User Interviews</div>
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
            Auckland commuters of all demographics I realised that with the
            given time and lockdown circumstances it would be difficult for me
            to find a diverse age range of interviewees who could participate
            within the next day.
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
            felt compelled to comment on. The interviews shed light on areas of
            the app which I wouldn’t have considered with constricting, directed
            questions.
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
        {/* <div data-aos='fade-up' className='desproj-content'>
          <div className='desproj-header'>
            User Personas
            <br />
            <span className='desproj-headertag'>Who are we designing for?</span>
          </div>
        </div> */}
        <div data-aos='fade-up' className='desproj-content'>
          <div className='desproj-header'>
            Revising the Problem
            <br />
            <span className='desproj-headertag'>
              Redefining users' design needs and opportunities.
            </span>
          </div>
          <img
            src={problemmap}
            alt='Identified problems organised by feasibility and priority'
          />
          <p>
            After creating a map summarising the current issues and
            opportunities for the AT Mobile app, I was able to further revise
            the problem statement into three main aims:
          </p>
          <span className='desproj-emph'>
            <ol>
              <li>
                Improve users’ easy management of their AT Hop cards, balance,
                and transactions.
              </li>
              <li>
                Help users make the most of AT Mobile’s diverse features to
                seamlessly plan and embark on their public transport journey.
              </li>
              <li>
                Keep users calm and confident in transportation under unusual
                circumstances, unpredictable service changes, or human error.
              </li>
            </ol>
          </span>
        </div>
        <div data-aos='fade-up' className='desproj-content'>
          <div className='desproj-header'>
            Ideation
            <br />
            <span className='desproj-headertag'>
              Brainstorming, concept visualisation, concept evaluation.
            </span>
          </div>
          <div className='desproj-subheader'>Initial Brainstorm</div>
          <p>
            I began with a rapid mind-map organising the sections in which I
            could tackle the redesign, noting down areas for improvement and
            changes drawn from user stories and the redefined grid of important
            and implementable solutions.
          </p>
          <img src={brainstorm} alt='Initial Brainstorm' />
          <div className='desproj-subheader'>Cleaner Navigation</div>
          <div className='desproj-tagline'>
            I then revisited the navigation map I originally created of the
            current AT Mobile App design, and rearranged the pages to be more
            efficient and include my new features.
          </div>
          <img src={newinfomap} alt='Information Architecture Redesign' />
          <p></p>
          <div className='desproj-subheader'>Digital Wireframing</div>

          <div className='desproj-2col'>
            <img
              style={{ width: '35vw' }}
              src={lofis}
              alt='Low fidelity wireframes'
            />
            <div>
              <p>
                A significant change I immediately made was removing the
                interactive maps and moving them exclusively to route details or
                tracking a live journey.
              </p>
              <p>
                Users seldom choose live departures to find nearby bus stops
                with the map - they primarily use live departures to look at the
                stops they’ve saved.
              </p>
              <p>
                Given that phones often have dedicated default map apps for live
                navigation which currently exceed the technology of AT Mobile,
                and that the live maps don’t aid in searching a journey, I
                decided there was little point in having such a visually
                dominating map on both the journey planner and live departure
                pages.
              </p>
              <p>
                I also focused on a home page where the most frequently used
                feature would be the in-app tag on replacing physical cards.
              </p>
            </div>
          </div>
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
              style={{ width: '30vw' }}
              src={solHome}
              alt='Solution #1: Your AT Hop card, on the go.'
            />
            <div>
              <div className='desproj-subheader2'>
                1. Your AT Hop card, on the go.
              </div>
              <ul>
                <li>
                  In-app cards users can tag on with in the case of forgetting
                  or losing their physical Hop cards.
                </li>
                <li>
                  Grouping account and balance buttons by three main user tasks
                  - topping up, tracking balance, and editing account details.
                </li>
                <li>
                  Swipe for fluid navigation through multiple cards on one
                  account and view status, perform actions, without switching in
                  and out.
                </li>
                <li>
                  UI organised with a focus on different possible account
                  management actions, with emphasis on clickable buttons to draw
                  attention to useful features.
                </li>
                <li>Reduced unnecessary pop-up browser actions.</li>
                <p />
                <li>
                  <b>Solved pain points:</b> unsuccessful journeys due to
                  missing or forgotten Hop cards, user un-friendly layout,
                  excessive nesting, poor display of actionable features, lack
                  of card status.
                </li>
              </ul>
            </div>
          </div>
          <div className='desproj-2col'>
            <div>
              <div className='desproj-subheader2'>
                2. Giving you more control to plan your journey.
              </div>
              <ul>
                <li>
                  Replaced map with more useful shortcuts to common journeys as
                  defined by the user and user behaviour, without complicating
                  information architecture.
                </li>
                <li>
                  Multiple improvements to journey search giving user more
                  freedom to choose the route which fits; access to journeys
                  prior to the current time, route sort settings, filter routes
                  by number of transfers, routes slightly earlier than "Depart
                  At" and slightly after "Arrive By" time settings.{' '}
                </li>
                <li>
                  More efficient search tool; swap start and destination
                  locations, suggest popular stops and stations as search
                  autofill first, show more recent searches.
                </li>
                <li>
                  Placed saved journeys in separate page with vertical list to
                  accommodate for larger number of saved journeys.
                </li>
                <li>
                  Saved and recent journeys give quick shortcut option to
                  recalculate route to destination from current location. Saved
                  journeys may also use "current location" value.
                </li>
                <li>
                  Conveniently export stops and stations for select route to
                  saved stops in Live Departures.
                </li>
                <li>
                  Home and work shortcuts set to custom locations by the user.
                </li>

                <p />
                <li>
                  <b>Solved pain points:</b> Nonoptimal journeys - longer, or
                  more costly - when the user doesn't have the best range of
                  routes to choose from. Slow and non-smart search function, and
                  overall difficulty in journey planning quickly.
                </li>
              </ul>
            </div>
            <img
              style={{ width: '15vw' }}
              src={solPlan}
              alt='Solution #2: Giving you control to plan your journey.'
            />
          </div>
          <div className='desproj-2col'>
            <img
              style={{ width: '15vw' }}
              src={solLive}
              alt='Solution #3: An organised, reliable live trip experience.'
            />
            <div>
              <div className='desproj-subheader2'>
                3. An organised, reliable live trip experience.
              </div>
              <ul>
                <li>
                  Never lose your chosen route with persistence for live
                  tracking - tap "Start trip" to select route as active trip,
                  and quickly return to route details by tapping "Active trip"
                  top banner.
                </li>
                <li>
                  Vertical list to view and easily open live departure board for
                  many saved stops.
                </li>
                <li>
                  Saved stops offer more information at a glance - departures
                  from a certain stop, as well as whether the stop may be
                  impacted by service disruptions, keeping users updated with
                  less clicks.
                </li>
                <li>
                  Turn on live reminders for a certain stop before a planned
                  journey for proactive users.
                </li>
                <li>
                  When no saved stops, lists recent stops and nearby stops. Live
                  departures never shows nothing - user is always encouraged to
                  explore and understand how Live Departures can benefit their
                  public transport experience.
                </li>

                <p />
                <li>
                  <b>Solved pain points:</b> Anxiety with live tracking routes
                  which close and can't be accessed after navigating away from
                  the route page. Non-scalable display for large number of saved
                  stops.
                </li>
              </ul>
            </div>
          </div>
          <div className='desproj-2col'>
            <div>
              <div className='desproj-subheader2'>
                4. Keeping you in the loop you choose.
              </div>
              <ul>
                <li>
                  Opt-out notifications based on location and transport type,
                  removing queries to user's trip history API to reduce time
                  cost in favour of simpler, technically non-unique selection of
                  alerts.
                </li>
                <li>
                  Visually intuitive display of alerts which requires manual
                  dismissal until relevant service disruption ends, in case user
                  wants to keep alert for reference.
                </li>
                <li>
                  Configure alerts in-app with clear toggles, with more relevant
                  categories of area in Auckland and transportation type.
                </li>
                <li>More control and customisation for the user.</li>
                <p />
                <li>
                  <b>Solved pain points:</b> Hidden service disruption alerts,
                  with no user control over which alerts to receive. Opt-in
                  quality, discouraging users from setting up alerts. In
                  particular, this meant no relevant alerts for infrequent
                  users, or new journeys which users hadn't taken in the past
                  month.
                </li>
              </ul>
            </div>
            <img
              style={{ width: '30vw' }}
              src={solAlert}
              alt='Solution #4: Keeping you in the loop you choose.'
            />
          </div>
        </div>
        <div data-aos='fade-up' className='desproj-content'>
          <div className='desproj-header'>
            Looking back, looking ahead.
            <br />
            <span className='desproj-headertag'>
              Learnings and what's next for this project.
            </span>
          </div>
          <p>
            This redesign was important to me (and therefore very fun!) because
            it dealt with technology that impacts hundreds of thousands of
            people in my city every day.
          </p>
          <p>
            As my first personal and individual product design project, I was
            able to try out applying my design research and ideation methods
            from my experience in other disciplines, while also exploring
            techniques I learned of by observing accomplished product designers.
            In particular, I formally tried <b>constructing user stories</b>,
            looking at <b>information architecture</b>, and making evaluations
            of competitor apps through <b>market research</b>. I also briefly
            made <b>user personas</b>, but decided not to go forward with them
            as I didn't feel they added value or focus to my synthesis of the
            problem, considering they were largely drawn from my user
            interviews, which were already few in number and focused on a small
            group of very specific characters.
          </p>

          <p>
            My process documentation also suggested that, after my initial
            brainstorm of changes, I was going to focus on an improved
            onboarding experience to encourage use or at least understanding of
            all the app's features. However, after remapping the app's
            navigation and redesigning the UI to be more intuitive and invite
            curiosity, I felt that the specific onboarding experience I had
            originally sketched out seemed less necessary.
          </p>
          <p>
            Going forward conceptually, I wanted to look into the UI/UX aspect
            of the design with more depth, and target the fringe users who I
            weren't able to conduct research with. Specifically, I'd like to
            revise my design to have better visibility, contrast, and be more
            friendly towards elderly immigrant patrons with potential language
            options. Many of the Chinese immigrant grandparents in East Auckland
            suburbs ride buses frequently, and during one user interview we
            discussed an instance of another bus rider asking the interviewee to
            translate the app instructions for her. This is something I'm
            enthusiastic about looking into.{' '}
          </p>
          <p>
            As for the next steps in the process, I'd like to get feedback from
            potential users and conduct tests to understand the effectiveness of
            my proposed changes, as well as discuss the feasibility of my
            technical proposes with Auckland Transport developers. I'd also like
            to spend more time gaining stronger prototyping skills!
          </p>
        </div>
      </div>

      <Socials />
      <Footer />
    </main>
  );
};

export default ATMobile;
