import * as React from 'react';
import '../styles/footer.css';
import Socials from './socials';

// markup
const Footer = () => {
  return (
    <main className='footer'>
      <div className='subheader-cont'>
        <div className='subheader'>
          If we can work together to make the world a brighter place, let me
          know. ✨
          <Socials />
        </div>
      </div>

      <p>
        coded with love (and a whole ton of CSS!) by <b>Isabel 玥 Li</b>. 2022.
      </p>
    </main>
  );
};

export default Footer;
