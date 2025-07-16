import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-80px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideOutLeft = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-80px);
  }
`;


const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(80px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideOutRight = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(80px);
  }
`;

const ContactButton = ({ label = 'Contact Me', animated = false, direction = 'left', onClick }) => {
  const [visible, setVisible] = useState(true);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!animated) return;
    const handleScroll = () => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      if (rect.top < 0) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animated]);

  return (
    <StyledWrapper direction={direction}>
      <button
        className={
          animated
            ? `button${visible ? ' visible' : ' hidden'}`
            : 'button'
        }
        ref={buttonRef}
      onClick={onClick}
      >
        <div className="blob1" />
        <div className="blob2" />
        <div className="inner">{label}</div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    cursor: pointer;
    font-size: 1rem;
    border-radius: 12px;
    border: none;
    padding: 1px;
    background: radial-gradient(circle 80px at 80% -10%, #ffffff, #181b1b);
    position: relative;
    transition:
      background 0.3s,
      transform 0.3s;
  }
  ${({ direction }) => direction === 'right' ? css`
    .button.visible {
      opacity: 1;
      transform: translateX(0);
      animation: ${slideInRight} 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
    }
    .button.hidden {
      opacity: 0;
      transform: translateX(80px);
      animation: ${slideOutRight} 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
    }
  ` : css`
    .button.visible {
      opacity: 1;
      transform: translateX(0);
      animation: ${slideInLeft} 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
    }
    .button.hidden {
      opacity: 0;
      transform: translateX(-80px);
      animation: ${slideOutLeft} 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
    }
  `}
  .button:not(.visible):not(.hidden) {
    opacity: 1;
    transform: translateX(0);
    animation: none;
  }
  .button:hover {
    transform: scale(0.98);
  }
  .button::after {
    content: "";
    position: absolute;
    width: 65%;
    height: 60%;
    border-radius: 120px;
    top: 0;
    right: 0;
    box-shadow: 0 0 20px #ffffff38;
    z-index: -1;
    transition: box-shadow 0.3s;
  }
  .button:hover::after {
    box-shadow: 0 0 10px #ffffff18;
  }
  .blob1 {
    position: absolute;
    width: 45px;
    height: 100%;
    border-radius: 12px;
    bottom: 0;
    left: 0;
    background: radial-gradient(
      circle 60px at 0% 100%,
      #3fe9ff,
      #0000ff80,
      transparent
    );
    box-shadow: -10px 10px 30px #0051ff2d;
    transition:
      background 0.3s,
      box-shadow 0.3s;
  }
  .button:hover .blob1 {
    box-shadow: -5px 5px 20px #000;
  }
  .inner {
    padding: 8px 16px;
    border-radius: 10px;
    color: #fff;
    z-index: 3;
    position: relative;
    background: radial-gradient(circle 80px at 80% -50%, #777777, #0f1111);
    transition: background 0.3s;
  }
  .button:hover .inner {
    background: radial-gradient(circle 80px at 80% -50%, #333333, #0f0f0f);
  }
  .inner::before {
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 10px;
    background: radial-gradient(
      circle 60px at 0% 100%,
      #00e1ff1a,
      #0000ff11,
      transparent
    );
    position: absolute;
    transition: opacity 0.3s;
  }
  .button:hover .inner::before {
    opacity: 0;
  }

  @media (max-width: 900px) {
    .button {
      font-size: 0.92rem;
      padding: 1px;
    }
    .blob1 {
      width: 30px;
    }
    .inner {
      padding: 7px 12px;
      font-size: 0.97rem;
    }
  }
  @media (max-width: 600px) {
    .button {
      font-size: 0.82rem;
      padding: 0.5px;
    }
    .blob1 {
      width: 20px;
    }
    .inner {
      padding: 5px 8px;
      font-size: 0.89rem;
    }
  }
`;

export default ContactButton;