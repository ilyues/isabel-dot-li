import * as React from 'react';
import '../styles/proj.css';

// markup
const ProjectItem = (prop) => {
  function renderTitle() {
    if (prop.titleClickable) {
      return (
        <a href={prop.titleUrl} target='_blank' className='proj-link'>
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
    if (prop.mainTag === 'Web dev') {
      return '#dd3005';
    } else if (
      prop.mainTag === 'Product design' ||
      prop.mainTag === 'Packaging design'
    ) {
      return '#024e53';
    } else if (prop.mainTag === 'Fine art' || prop.mainTag === 'Illustration') {
      return '#df9100';
    } else {
      return '#645ff0';
    }
  }
  return (
    <main className='proj'>
      <div className='proj-left'>
        <div className='mini-proj-header'>
          <div className='mini-proj-tagline' style={{ color: findTagColour() }}>
            {prop.tagline}
          </div>
          {renderTitle()}
        </div>
        <div className='proj-tags'>
          <div className='main-tag' style={{ background: findTagColour() }}>
            {prop.mainTag}
          </div>
          {prop.tags.map((tag) => (
            <div className='proj-tag'>{tag}</div>
          ))}
        </div>
      </div>
      <div className='proj-centre'>{prop.descrip}</div>
      <div className='proj-right'>{renderImage()}</div>
    </main>
  );
};

export default ProjectItem;
