import { React, useEffect } from "react";
import "./styles/desproj.css";
import cover from "./images/work/proact/proact-coverimage.png";
import desktop from "./images/work/proact/big-frame.png";
import mobile from "./images/work/proact/big-frame-mobile.png";
import sol1 from "./images/work/proact/sol-1.png";
import sol2 from "./images/work/proact/sol-2.png";
import sol3 from "./images/work/proact/sol-3.png";
import sol4 from "./images/work/proact/sol-4.png";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Socials from "./components/socials";
import AOS from "aos";
import "aos/dist/aos.css";

const ProAct = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <main className="desproj">
      <title>about Isabel 🖍️</title>
      <Navbar />

      <div className="desproj-container">
        <div className="desproj-coverimage">
          <img src={cover} alt="Cover"></img>
        </div>
        <div className="desproj-titlebox">
          <div className="desproj-title">
            <h5>
              ProAct:
              <br />
              Disaster Response Dashboard
            </h5>
          </div>
          <div className="desproj-details">
            <h6>Team:</h6>In collaboration with Mun Joon Teo, Winny Jiang, and
            Zi Lin Wang. <p />
            Responsible for product design and pitching.
            <p>
              <h6>Tools:</h6> Figma
            </p>
            <p>
              <h6>Timeline:</h6> 24h, 16-17 Jan 2021
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="desproj-content">
          <div className="desproj-tagline">
            Streamline the crisis response and identify victims
          </div>
          <p>
            Save the Children is a relief provider for children affected by
            disasters. They focus on establishing Child Friendly Spaces in
            evacuation and recovery centres to ensure children are comfortable
            during an emergency.{" "}
          </p>
          <p>
            Children are highly vulnerable in disasters and can{" "}
            <b>harbour lifelong trauma</b> as a result of them. Therefore, it is
            important to protect them during crises and provide them with
            enhanced care.{" "}
          </p>
        </div>
        <div data-aos="fade-up" className="desproj-content">
          <div className="desproj-header">
            Overview
            <br />
            <span className="desproj-headertag">
              Problem, process, outcome.
            </span>
          </div>
          <p>
            After analysing the brief and posing questions to the charity
            representative, we came to the following conclusion about the
            problem they are facing.
          </p>
          <p>
            Currently, their services struggle to efficiently prioritise
            resources and personnel, i.e. their services:
            <ol>
              <li>Do not respond rapidly enough.</li>
              <li>Do not address victim-specific needs.</li>
              <li>Do not efficiently adapt to rapid developments.</li>
            </ol>
          </p>
          <img src={desktop} alt="My redesign solutions" />
          <img src={mobile} alt="My redesign solutions for mobile" />
        </div>
        <div data-aos="fade-up" className="desproj-content">
          <div className="desproj-header">
            Use cases
            <br />
            <span className="desproj-headertag">
              Investigating users' needs
            </span>
          </div>
          <p>
            To determine how to effectively provide support to these children,
            we examined what needed to be done at all stages of the crisis
            response.
          </p>
          <p>
            We came up with the following use cases:
            <ol>
              <li>
                Before an event, sentiment analysis is used to predict the
                movement of people and prepare resources and personnel in
                advance.
              </li>
              <li>
                During the event, Twitter and official government data is
                collected to monitor the situation and keep headquarters
                updated.
              </li>
              <li>
                After the initial response, our companion app lets responders
                communicate with headquarters to efficiently provide support
                based on the capacities of safe spaces.
              </li>
            </ol>
          </p>
        </div>
        <div data-aos="fade-up" className="desproj-content">
          <div className="desproj-header">
            Solutions
            <br />
            <span className="desproj-headertag">
              The proposed answers to our questions.
            </span>
          </div>
          <div className="desproj-2col">
            <img
              style={{ width: "30vw" }}
              src={sol1}
              alt="Solution #1: Centralised Disaster Management"
            />
            <div>
              <div className="desproj-subheader2">
                1. Centralised Disaster Management
              </div>
              <div>
                Our centralised platform reduces response lag time, one of the
                major pain points for relief.
              </div>
            </div>
          </div>
          <div className="desproj-2col">
            <div>
              <div className="desproj-subheader2">
                2. People's Needs and Government Sources
              </div>
              <div>
                <p>
                  We analyse twitter feeds for event-specific tweets. Then,
                  leveraging sentiment analysis we quickly identify “negative”
                  tweets that indicate a family requires aid. Our platform also
                  pulls updates from government sources to provide HQ with
                  relevant developments.
                </p>
                <p>
                  This creates a holistic view of families in crises by
                  considering reliable, official sources and also community
                  voices from tweets.
                </p>
              </div>
            </div>
            <img
              style={{ width: "30vw" }}
              src={sol2}
              alt="Solution #2: People's Needs and Government Sources"
            />
          </div>
          <div className="desproj-2col">
            <img
              style={{ width: "30vw" }}
              src={sol3}
              alt="Solution #3: Companion App"
            />
            <div>
              <div className="desproj-subheader2">3. Companion App</div>
              <div>
                Respondents can contact HQ for resources and personnel via the
                companion app. Messages are then sent to the dashboard
              </div>
            </div>
          </div>
          <div className="desproj-2col">
            <div>
              <div className="desproj-subheader2">4. Customisation</div>
              <div>
                A dashboard can be created for each event, featuring
                event-specific twitter analysis, news updates and respondent
                collaboration.
              </div>
            </div>
            <img
              style={{ width: "30vw" }}
              src={sol4}
              alt="Solution #4: Customisation"
            />
          </div>
        </div>
      </div>
      <Socials />
      <Footer />
    </main>
  );
};

export default ProAct;
