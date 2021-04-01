import * as React from 'react';
import '../styles/miniproject.css';

// markup
const MiniProject = (prop) => {
  function renderClient() {
    if (prop.client) {
      if (prop.clientClickable) {
        return (
          <span className='mini-proj-client'>
            <br />
            for{' '}
            <a href={prop.clientUrl} target='_blank'>
              <b>{prop.clientName}</b>
            </a>
          </span>
        );
      } else {
        return (
          <span className='mini-proj-client'>
            <br />
            for <b>{prop.clientName}</b>
          </span>
        );
      }
    } else {
      return null;
    }
  }

  function renderTitle() {
    if (prop.titleClickable) {
      return (
        <a href={prop.titleUrl} target='_blank' className='mini-proj-link'>
          {prop.title}
        </a>
      );
    } else {
      return <span>{prop.title}</span>;
    }
  }

  function renderImage() {
    if (prop.titleClickable) {
      return (
        <a href={prop.titleUrl}>
          <img src={prop.image} alt={prop.title} />
        </a>
      );
    } else {
      return <img src={prop.image} alt={prop.title} />;
    }
  }

  function findTagColour() {
    if (prop.mainTag == 'Web dev') {
      return '#dd3005';
    } else if (prop.mainTag == 'Product design') {
      return '#024e53';
    } else {
      return '#df9100';
    }
  }
  return (
    <main className='mini-proj'>
      <div className='mini-proj-left'>{renderImage()}</div>
      <div className='mini-proj-right'>
        <div className='mini-proj-tagline' style={{ color: findTagColour() }}>
          {prop.tagline}
        </div>
        <div className='mini-proj-header'>
          {renderTitle()} {/* {renderClient()} */}
        </div>
        <div className='mini-proj-tags'>
          <div
            className='mini-main-tag'
            style={{ background: findTagColour() }}
          >
            {prop.mainTag}
          </div>
          {prop.tags.map((tag) => (
            <div className='mini-proj-tag'>{tag}</div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MiniProject;
