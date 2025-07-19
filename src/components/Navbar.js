import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setSidebarOpen(false);
  };
  return (
    <StyledWrapper>
      {/* Mobile top row: Logo + Hamburger */}
      <MobileTopRow>
        <Logo />
        <Hamburger onClick={() => setSidebarOpen(true)}>
          <span />
          <span />
          <span />
        </Hamburger>
      </MobileTopRow>
      {/* Sidebar for mobile */}
      <Sidebar open={sidebarOpen}>
        <SidebarLinks>
          <div className="btn" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setSidebarOpen(false); }}>Home</div>
          <div className="btn" onClick={() => handleNavClick('about')}>About</div>
          <div className="btn" onClick={() => handleNavClick('projects')}>Project</div>
          <div className="btn" onClick={() => handleNavClick('contact')}>Contact</div>
        </SidebarLinks>
      </Sidebar>
      {/* Overlay for sidebar */}
      {sidebarOpen && <SidebarOverlay onClick={() => setSidebarOpen(false)} />}
      {/* Desktop nav */}
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

const MobileTopRow = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    padding: 0.5rem 1rem 0.5rem 1rem;
    position: fixed;
    top: 0;
    left: 0;
    background: var(--nord0, #2e3440);
    z-index: 2100;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  }
`;

const Hamburger = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    position: static;
    z-index: 2001;
    background: var(--nord0);
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    cursor: pointer;
    span {
      width: 24px;
      height: 3px;
      background: var(--nord6);
      margin: 3px 0;
      border-radius: 2px;
      transition: all 0.3s;
    }
  }
`;

const Sidebar = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 70vw;
    max-width: 320px;
    background: rgba(46, 52, 64, 0.55); /* translucent glass effect */
    box-shadow: 2px 0 16px rgba(0,0,0,0.18);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-right: 1.5px solid rgba(255,255,255,0.13);
    z-index: 2002;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s cubic-bezier(0.22,1,0.36,1);
    padding: 2.5rem 1.2rem 1.2rem 1.2rem;
    .btn {
      width: 100%;
      text-align: left;
      padding: 1.1rem 0 1.1rem 0.5rem;
      font-size: 1.2rem;
      color: var(--nord6);
      border-radius: 6px;
      margin-bottom: 0.2rem;
      background: none;
      transition: background 0.2s;
    }
    .btn:hover {
      background: var(--nord3, #434c5e);
      color: #37FF8B;
    }
  }
`;

const SidebarLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const SidebarOverlay = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.25);
    z-index: 2000;
  }
`;

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1000;
  .outline {
    position: absolute;
    inset: 0;
    pointer-events: none;
    @media (max-width: 600px) {
      display: none;
    }
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
      display: none;
    }
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
      display: none;
    }
  }
  .btn {
    padding: 0.5em 1.5em;
    color: var(--nord6);
    cursor: pointer;
    transition: all 0.38s cubic-bezier(0.22,1,0.36,1);
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
  }
`;

export default Navbar; 