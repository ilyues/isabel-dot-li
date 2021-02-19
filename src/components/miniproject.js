import * as React from "react";
import "../styles/miniproject.css";

// markup
const MiniProject = (prop) => {
  function renderClient() {
    if (prop.client) {
      if (prop.clientClickable) {
        return (
          <span className="mini-proj-client">
            <br />
            for{" "}
            <a href={prop.clientUrl} target="_blank">
              <b>{prop.clientName}</b>
            </a>
          </span>
        );
      } else {
        return (
          <span className="mini-proj-client">
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
        <a href={prop.titleUrl} target="_blank" className="mini-proj-link">
          <b>{prop.title}</b>
        </a>
      );
    } else {
      return <b>{prop.title}</b>;
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
    if (prop.mainTag == "Web dev") {
      return "#dd3005dc";
    } else {
      return "#024e53dc";
    }
  }
  return (
    <main className="mini-proj">
      <div className="mini-proj-left">{renderImage()}</div>
      <div className="mini-proj-right">
        <div className="mini-proj-header">
          {renderTitle()} {renderClient()}
        </div>
        {prop.descrip}
        <br />
        <div className="mini-proj-tags">
          <div
            className="mini-main-tag"
            style={{ background: findTagColour() }}
          >
            <b>{prop.mainTag}</b>
          </div>
          {prop.tags.map((tag) => (
            <div className="mini-proj-tag">
              <b>{tag}</b>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MiniProject;
