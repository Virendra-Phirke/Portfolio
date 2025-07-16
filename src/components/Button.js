import React from 'react';
import styled from 'styled-components';

const Button = ({ label = 'Download Now' }) => {
  return (
    <StyledWrapper>
      <button className="button">
        <span className="button_lg">
          <span className="button_sl" />
          <span className="button_text">{label}</span>
        </span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border: none;
    background: none;
    color: #0f1923;
    cursor: pointer;
    position: relative;
    padding: 4px;
    margin-bottom: 0;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 11px;
    transition: all .15s ease;
    min-width: 0;
    max-width: 90px;
  }

  .button::before,
  .button::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    height: calc(50% - 3px);
    border: 1px solid #7D8082;
    transition: all .15s ease;
  }

  .button::before {
    top: 0;
    border-bottom-width: 0;
  }

  .button::after {
    bottom: 0;
    border-top-width: 0;
  }

  .button:active,
  .button:focus {
    outline: none;
    box-shadow: 0 0 0 2px #a78bfa44, 0 4px 24px 0 #a78bfa33;
    transform: scale(0.97);
    transition: all 0.38s cubic-bezier(0.22,1,0.36,1);
  }

  .button:hover {
    box-shadow: 0 6px 28px 0 #a78bfa33, 0 1.5px 12px 0 #00ff7540;
    transform: scale(1.045);
    color: #a78bfa;
    transition: all 0.38s cubic-bezier(0.22,1,0.36,1);
  }

  .button:active::before,
  .button:active::after {
    right: 2px;
    left: 2px;
  }

  .button:active::before {
    top: 2px;
  }

  .button:active::after {
    bottom: 2px;
  }

  .button_lg {
    position: relative;
    display: block;
    padding: 5px 10px;
    color: #fff;
    background-color: #0f1923;
    overflow: hidden;
    box-shadow: inset 0px 0px 0px 1px transparent;
    border-radius: 5px;
    min-width: 0;
    max-width: 90px;
  }

  .button_lg::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    background-color: #0f1923;
  }

  .button_lg::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 4px;
    height: 4px;
    background-color: #0f1923;
    transition: all .2s ease;
  }

  .button_sl {
    display: block;
    position: absolute;
    top: 0;
    bottom: -1px;
    left: -8px;
    width: 0;
    background-color: #ff4655;
    transform: skew(-15deg);
    transition: all .2s ease;
  }

  .button_text {
    position: relative;
    font-size: 11px;
    padding: 0 2px;
  }

  .button:hover {
    color: #0f1923;
  }

  .button:hover .button_sl {
    width: calc(100% + 10px);
  }

  .button:hover .button_lg::after {
    background-color: #fff;
  }
`;

export default Button; 