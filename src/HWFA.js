import { React, useEffect } from 'react';
import './styles/desproj.css';
import cover from './images/work/hwfa/hwfa-cover.png';
import Footer from './components/footer';
import Navbar from './components/navbar';

import AOS from 'aos';
import 'aos/dist/aos.css';

const HWFA = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <main className='desproj'>
      <title>How We Fall Apart</title>
      <Navbar />

      <div className='desproj-container'>
        <div className='desproj-coverimage'>
          <img src={cover} alt='Cover'></img>
        </div>
        <div className='desproj-titlebox'>
          <div className='desproj-title'>
            <h5>
              <i>How We Fall Apart</i>
              <br />
              Character Illustrations
            </h5>
          </div>
          <div className='desproj-details'>
            <h6>Team:</h6>Individual, with the great vision of author Katie
            Zhao, of course. <p />
            Responsible for character design and illustration.
            <p>
              <h6>Tools:</h6> Adobe Photoshop
            </p>
            {/* <p>
              <h6>Timeline:</h6> Sep - Dec 2020
            </p> */}
          </div>
        </div>
        <div /* data-aos='fade-up' */ className='desproj-content'>
          <div className='desproj-tagline'>
            Visualising Asian Americans in dark academia.
          </div>
          <div className='desproj-container'>
            <div>
              <p>
                In late 2020, author Katie Zhao approached me to commission card
                designs of her characters from her upcoming YA thriller novel,{' '}
                <a
                  href='https://www.goodreads.com/book/show/52778487-how-we-fall-apart'
                  target='_blank'
                >
                  <i>How We Fall Apart</i>
                </a>
                . I was thrilled to have the chance to bring these characters to
                life for her novel pre-order campaign, especially for a book
                centred around Asian American characters.
              </p>
              <p>
                Keep up to date with Katie's novel release on Twitter,{' '}
                <a href='https://twitter.com/ktzhaoauthor' target='_blank'>
                  @ktzhaoauthor
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default HWFA;
