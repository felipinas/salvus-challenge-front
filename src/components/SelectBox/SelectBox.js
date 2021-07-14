import React from 'react';

import './SelectBox.css';

function SelectBox(props) {
  return (
      <label htmlFor={props.htmlFor} className="select-box">

          {props.children}

          <img src={props.image} alt={props.alt} />

          <span>
              {props.specialty}
          </span>
          
      </label>
  );
}

export default SelectBox;