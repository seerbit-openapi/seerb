import React from "react";

export default props => {
  return (
    <div className="App-container">
      <div className="App">
        <div className="container">
          <div className="col-lg-12">{props.children}</div>
        </div>
      </div>
    </div>
  );
};
