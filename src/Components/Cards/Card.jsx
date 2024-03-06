import React from "react";
import "./card.css";
const Card = ({ children, title }) => {
  return (
    <>
      <div className="boards">
        <div className="board">
          <h3>{title}</h3>
          <div className="dropzone">
            <div className="card" draggable="true">
              <div className="status"></div>
              <div className="content">Estudar</div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Card;
