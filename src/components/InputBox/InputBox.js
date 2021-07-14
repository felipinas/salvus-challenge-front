import React from 'react';

import './InputBox.css';

function InputBox(props) {
  return (
    <>
        <label htmlFor={props.htmlFor}>
            {props.title}
        </label> <br />

        {props.children}
    </>
  );
}

export default InputBox;