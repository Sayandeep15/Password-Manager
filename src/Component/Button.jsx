import React from 'react';
import styled from 'styled-components';

const Button = ({value, onClick,disabled}) => {
  return (
    <StyledWrapper>
      <div className="container">
        <button onClick={onClick} className="button" disabled={disabled}>{value} </button>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    font-size: 15px;
    padding: 0.4em 0.8em;
    border-radius: 20px;
    border: none;
    font-weight:400;
    background-color: #05050A;
    color: #fff;
    cursor: pointer;
    box-shadow: 2px 2px 3px #000000b4;
  }

  .container {
    position: relative;
    padding: 3px;
    background: linear-gradient(90deg, #7C3AED, #ed0687);
    border-radius: 20px;
    transition: all 0.4s ease;
  }

  .container::before {
    content: "";
    position: absolute;
    inset: 0;
    margin: auto;
    border-radius: 20px;
    z-index: -10;
    filter: blur(0);
    transition: filter 0.4s ease;
  }

  .container:hover::before {
    background: linear-gradient(90deg, #7C3AED, #ed0687);
    filter: blur(1.2em);
  }
  .container:active::before {
    filter: blur(0.2em);
  }`;

export default Button;
