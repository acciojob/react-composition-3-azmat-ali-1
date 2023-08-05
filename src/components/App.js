
import React from "react";
import './../styles/App.css';

 // Assuming you have a CSS file to style the tooltip.

const Tooltip = ({ text, children }) => {
  return (
    <div className="tooltip">
      {children}
      <span className="tooltiptext">{text}</span>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Tooltip Example</h1>
      <Tooltip text="This is a tooltip text">
        <span className="tooltip">Hover over me!</span>
      </Tooltip>
    </div>
  );
};

export default App;

