import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <StyledWrapper>
      <div className="nav">
        <div className="container">
          <div className="btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</div>
          <div className="btn" onClick={() => handleNavClick('about')}>About</div>
          <div className="btn" onClick={() => handleNavClick('projects')}>Project</div>
          <div className="btn" onClick={() => handleNavClick('contact')}>Contact</div>
          <svg className="outline" overflow="visible" width={400} height={60} viewBox="0 0 400 60" xmlns="http://www.w3.org/2000/svg">
            <rect className="rect" pathLength={100} x={0} y={0} width={400} height={60} fill="transparent" strokeWidth={5} />
          </svg>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1000;
  .outline {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .rect {
    stroke-dashoffset: 5;
    stroke-dasharray: 0 0 10 40 10 40;
    transition: 0.5s;
    stroke: #fff;
  }

  .nav {
    position: relative;
    width: 400px;
    height: 60px;
    @media (max-width: 900px) {
      width: 100vw;
      height: auto;
    }
    @media (max-width: 600px) {
      width: 100vw;
      height: auto;
    }
  }

  .container:hover .outline .rect {
    transition: 999999s;
    /* Must specify these values here as something *different* just so that the transition works properly */
    stroke-dashoffset: 1;
    stroke-dasharray: 0;
  }

  .container {
    position: absolute;
    inset: 0;
    background: var(--nord0);
    border-radius: 16px;
    box-shadow: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0.5em;
    @media (max-width: 600px) {
      flex-direction: row;
      padding: 0.5em;
      gap: 0;
      background: var(--nord0);
      border-radius: 16px;
      box-shadow: none;
      position: absolute;
      z-index: 1000;
    }
  }

  .btn {
    padding: 0.5em 1.5em;
    color: var(--nord6);
    cursor: pointer;
    transition: all 0.38s cubic-bezier(0.22,1,0.36,1);
    @media (max-width: 600px) {
      padding: 0.5em 1.5em;
      font-size: 1rem;
      width: auto;
      text-align: center;
      border-radius: 0;
      margin-bottom: 0;
    }
  }

  .btn:hover {
    background: transparent;
    color: #ebcb8b;
  }

  .btn:nth-child(1):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 2 8 73.3 8 10.7;
    stroke: #37FF8B;
  }

  .btn:nth-child(2):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 24.5 8.5 27.5 8.5 55.5;
    stroke: #37FF8B;
  }

  .btn:nth-child(3):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 34.7 6.9 10.2 6.9 76;
    stroke: #37FF8B;
  }

  .btn:nth-child(4):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 12.6 9.5 49.3 9.5 31.6;
    stroke: #37FF8B;
  }

  .btn:hover ~ .outline .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 0 10 40 10 40;
    stroke: #37FF8B;
    transition: 0.5s !important;
  }`;

export default Navbar; 