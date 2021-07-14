import React from 'react';

import './DataBox.css';

function DataBox(props) {
  return (
      <div className="data-box" style={ props.style }>
          <h1>
              {props.title}
          </h1>
          
          <span>
              {props.quantity}
          </span>
      </div>
  );
}

export default DataBox;