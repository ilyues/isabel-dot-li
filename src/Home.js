import * as React from "react";
import "./styles/app.css";
import li from "./images/LI.png";
import yue from "./images/YUE.png";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Socials from "./components/socials";
import MiniProject from "./components/miniproject";
import TextLoop from "react-text-loop";
import cofed from "./images/work/cofed.png";
import proact from "./images/work/proact.png";
import hambur from "./images/work/hambur.png";
import art01 from "./images/art-01.jpg";
import art02 from "./images/art-02.jpg";
import art03 from "./images/art-03.jpg";

// markup
const Home = () => {
  // changing greeting largely inspired by http://ellen.li
  var today = new Date();
  var hourNow = today.getHours();
  var hello;

  if (hourNow > 18) {
    hello = "Evening!";
  } else if (hourNow > 12) {
    hello = "Good afternoon!";
  } else if (hourNow > 5) {
    hello = "Morena!";
  } else {
    hello = "Kia ora!";
  }

  // items for the things i'm currently doing
  const items = [
    <span>
      <span className="song">R U Mine?</span>{" "}
      <span className="artist">— Arctic Monkeys</span>
    </span>,
    <span>
      <span className="song">愛人錯過</span>{" "}
      <span className="artist">— 告五人</span>
    </span>,
    <span>
      <span className="song">Snow 눈</span>{" "}
      <span className="artist">— SURL</span>
    </span>,
    <span>
      <span className="song">Opera House</span>{" "}
      <span className="artist">— Cigarettes After Sex</span>
    </span>,
    <span>
      <span className="song">No Blueberries</span>{" "}
      <span className="artist">— CL + DPR IAN + DPR LIVE</span>
    </span>,
  ];

  // mini projs - move to airtable or something, eventually
  const miniProjs = [
    {
      title: "MyceliYum Web Portal",
      titleClickable: false,
      titleUrl: null,
      client: true,
      clientName: "CoFED",
      clientClickable: true,
      clientUrl: "http://cofed.coop/",
      descrip:
        "Worked with a team of eight to produce a web portal for BIPOC-led food and land co-operatives at every point along the food chain to connect. Strengthened secure co-op networking with profile personalisation, location search, and customised filters.",
      mainTag: "Web dev",
      tags: ["React.js", "Express.js", "PostgreSQL"],
      image: cofed,
    },
    {
      title: "Proact Disaster Response Dashboard",
      titleClickable: false,
      titleUrl: null,
      client: true,
      clientClickable: false,
      clientUrl: null,
      clientName: "Save the Children (#HackForGood Accenture)",
      descrip:
        "In a team of four, designed dashboard and companion app to streamline natural disaster crisis response and identify victim needs. Uses real-time information through community (sentiment analysis) and government sources, tailored crisis map, and standardised responder communication system.",
      mainTag: "Product design",
      tags: ["Figma", "Wireframing", "Prototyping"],
      image: proact,
    },
    {
      title: "Hamburbur Stack Visualiser",
      titleClickable: true,
      titleUrl: "https://ilyues.github.io/hambur/",
      client: false,
      clientClickable: false,
      clientUrl: null,
      clientName: null,
      descrip:
        "Fun and novel interactive web browser visualisation of the stack data structure, made with the p5.js JavaScript library.",
      mainTag: "Web dev",
      tags: ["HTML/CSS", "p5.js"],
      image: hambur,
    },
  ];
  return (
    <main>
      <title>Isabel Li 🖍️</title>

      <Navbar />
      <Socials />
      <img className="bread-slice1" src={li} alt="李" />

      <div className="filling">
        <div className="meat">
          <div className="lettuce">🖍️ {hello} </div>
          <h1>
            I’m Isabel. <br /> I design, illustrate, and code towards a kinder
            world.
          </h1>
          <div className="pickles">
            <span className="doing-stuff">Listening to:</span>{" "}
            <span className="stuff">
              {items[Math.floor(Math.random() * items.length)]}
            </span>
            <br />
          </div>
          <div className="pickles">
            <span className="doing-stuff">Currently:</span>
            {"  "}
            <TextLoop
              interval={3500}
              fade={true}
              springConfig={{ stiffness: 5, damping: 2 }}
            >
              <span className="stuff">resting, learning, making.</span>
              <span className="stuff">
                {" "}
                developing @{" "}
                <a href="https://codebase.berkeley.edu/" target="_blank">
                  Berkeley Codebase.
                </a>
              </span>
              <span className="stuff">elbows deep in oil paints.</span>
              <span className="stuff">
                writing poetry on a Google doc that's seen some things.
              </span>
              <span className="stuff">
                freelancing, portrait commissions mostly.
              </span>
              <span className="stuff">
                designing @{" "}
                <a href="https://innovativedesign.club/" target="_blank">
                  Innovative Design.
                </a>
              </span>
            </TextLoop>
          </div>
        </div>
      </div>
      <img className="bread-slice2" src={yue} alt="玥" />
      <div className="content-two">
        <div className="subheader">
          Here are some things I've been working on and learning from.
        </div>
        <div className="all-minis">
          <div className="tech-minis">
            <svg
              className="tech-blob"
              viewBox="0 0 500 500"
              width="100%"
              id="blobSvg"
            >
              <path
                id="blob"
                d="M405.5,303.5Q436,357,373.5,356.5Q311,356,280.5,369.5Q250,383,208.5,388.5Q167,394,109.5,379Q52,364,40,307Q28,250,52.5,200Q77,150,134.5,149.5Q192,149,221,112Q250,75,298,79.5Q346,84,375.5,122.5Q405,161,390,205.5Q375,250,405.5,303.5Z"
                fill="none"
                stroke-width="7px"
                stroke="#aeabff"
              ></path>
            </svg>
            {miniProjs.map((proj) => (
              <MiniProject
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
            ))}
          </div>
          <div className="art-mini">
            <div className="art-container">
              <img className="art-01" src={art01} alt="portrait-1" />
              <img className="art-02" src={art02} alt="portrait-2" />
              <img className="art-03" src={art03} alt="portrait-3" />
            </div>
            <div className="art-descrip">
              <span className="mini-proj-header">
                <b>Audacity Illustration Series</b>
              </span>
              <br />A visual investigation into youth voice and expression of
              contemporary youth issues, as well as the digital distortion of
              these voices as we navigate a social landscape now inseparable
              from the internet. A series of digital and traditional paintings.
              <div className="mini-proj-tags">
                <div
                  className="mini-main-tag"
                  style={{ background: "#eea506dc" }}
                >
                  <b>Illustration</b>
                </div>
                <div className="mini-proj-tag">
                  <b>Clip Studio Paint</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Home;
