import * as React from 'react';
import '../styles/proj.css';

// markup
const ProjectItem = (prop) => {
  function renderClient() {
    if (prop.client) {
      if (prop.clientClickable) {
        return (
          <span className='proj-client'>
            <br />
            for{' '}
            <a href={prop.clientUrl} target='_blank'>
              <b>{prop.clientName}</b>
            </a>
          </span>
        );
      } else {
        return (
          <span className='proj-client'>
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
    if (prop.mainTag == 'Web dev') {
      return '#dd3005dc';
    } else {
      return '#024e53dc';
    }
  }
  return (
    <main className='proj'>
      <div className='proj-left'>
        <div className='proj-header'>
          <span className='proj-title'>{renderTitle()}</span> {renderClient()}
        </div>
        <div className='proj-tags'>
          <div className='main-tag' style={{ background: findTagColour() }}>
            <b>{prop.mainTag}</b>
          </div>
          {prop.tags.map((tag) => (
            <div className='proj-tag'>
              <b>{tag}</b>
            </div>
          ))}
        </div>
      </div>
      <div className='proj-centre'>{prop.descrip}</div>
      <div className='proj-right'>{renderImage()}</div>
    </main>
  );
};

export default ProjectItem;
