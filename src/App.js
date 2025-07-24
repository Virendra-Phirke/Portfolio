import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Card from './components/Card';
import Contact from './components/Contact';
import { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

const GlobalStyle = createGlobalStyle`
  :root {
    --nord0: #2e3440;
    --nord1: #3b4252;
    --nord2: #434c5e;
    --nord3: #4c566a;
    --nord4: #d8dee9;
    --nord5: #e5e9f0;
    --nord6: #eceff4;
    --nord7: #8fbcbb;
    --nord8: #88c0d0;
    --nord9: #81a1c1;
    --nord10: #5e81ac;
    --nord11: #bf616a;
    --nord12: #d08770;
    --nord13: #ebcb8b;
    --nord14: #a3be8c;
    --nord15: #b48ead;
    background: var(--nord0);
    color: var(--nord6);
  }
  html, body, #root {
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, var(--nord0) 0%, var(--nord1) 100%);
    color: var(--nord6);
    font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
    /* Hide scrollbars but allow scrolling */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    overflow-x: hidden;
    scroll-behavior: smooth;
    transition: background 0.8s cubic-bezier(0.22,1,0.36,1), color 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s cubic-bezier(0.22,1,0.36,1);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html::-webkit-scrollbar, body::-webkit-scrollbar, #root::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

function App() {
  const [heroVisible, setHeroVisible] = useState(true);
  const aboutRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (!aboutSection) return;
      const rect = aboutSection.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      // If About's top is below the bottom of the Hero (viewport), show Hero
      // If About's top is at or above the top of the viewport, show About
      if (rect.top > windowHeight * 0.2) {
        setHeroVisible(true);
      } else if (rect.top <= windowHeight * 0.2) {
        setHeroVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Navbar />
      <div style={{ position: 'relative', minHeight: '80vh', width: '100%' }}>
        <AnimatePresence>
          <Hero
            key="hero"
            fade={heroVisible ? 1 : 0}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              pointerEvents: heroVisible ? 'auto' : 'none',
              zIndex: heroVisible ? 2 : 1,
            }}
            animate={{ opacity: heroVisible ? 1 : 0, y: heroVisible ? 0 : 40 }}
            exit={{ opacity: 0, y: 40 }}
            initial={false}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
          <AboutMe
            key="about"
            ref={aboutRef}
            visible={!heroVisible}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              pointerEvents: !heroVisible ? 'auto' : 'none',
              zIndex: !heroVisible ? 2 : 1,
            }}
            animate={{ opacity: !heroVisible ? 1 : 0, y: !heroVisible ? 0 : 40 }}
            exit={{ opacity: 0, y: 40 }}
            initial={false}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
        </AnimatePresence>
        <AnimatePresence>
          <motion.section
            key="projects"
            as={ProjectsSection}
            id="projects"
            className="project-section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ transition: 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)' }}
          >
            <StylishProjectsHeading
              initial={{ opacity: 0, y: -80, scale: 0.7, rotate: -10 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 320, damping: 18, mass: 0.7 }}
              viewport={{ once: true }}
            >
              Projects
            </StylishProjectsHeading>
            <motion.div
              style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{}}
            >
              <Card
                title="Portfolio Website"
                subtitle="React, Styled-Components"
                tag="Featured"
                sourceUrl="https://github.com/yourusername/portfolio"
                liveUrl="https://yourportfolio.com"
                image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                customVariants={{
                  hidden: { opacity: 0, x: -120 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
                  hover: { scale: 1.04, boxShadow: '0px 8px 32px 0 rgba(0,255,117,0.18), 0 8px 32px 0 rgba(31,38,135,0.18)', borderColor: '#00ff75' },
                  tap: { scale: 0.97 },
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                viewport={{ once: true, amount: 0.5 }}
                initial="hidden"
                whileInView="visible"
              />
              <Card
                title="Weather App"
                subtitle="Next.js, API"
                tag="Popular"
                sourceUrl="https://github.com/yourusername/weather-app"
                liveUrl="https://weatherapp.com"
                image="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                customVariants={{
                  hidden: { opacity: 0, scale: 0.92 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
                  hover: { scale: 1.07, boxShadow: '0px 8px 32px 0 rgba(0,255,117,0.18), 0 8px 32px 0 rgba(31,38,135,0.18)', borderColor: '#00ff75' },
                  tap: { scale: 0.97 },
                }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                viewport={{ once: true, amount: 0.5 }}
                initial="hidden"
                whileInView="visible"
              />
              <Card
                title="Task Manager"
                subtitle="React, GSAP"
                tag="New"
                sourceUrl="https://github.com/yourusername/task-manager"
                liveUrl="https://taskmanager.com"
                image="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
                customVariants={{
                  hidden: { opacity: 0, y: 80 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.9, type: 'spring', bounce: 0.35 } },
                  hover: { scale: 1.06, boxShadow: '0px 8px 32px 0 rgba(0,255,117,0.18), 0 8px 32px 0 rgba(31,38,135,0.18)', borderColor: '#00ff75' },
                  tap: { scale: 0.97 },
                }}
                transition={{ duration: 0.9, type: 'spring', bounce: 0.35, delay: 0.32 }}
                viewport={{ once: true, amount: 0.5 }}
                initial="hidden"
                whileInView="visible"
              />
              <Card
                title="Blog Platform"
                subtitle="Next.js, Markdown"
                tag="Open Source"
                sourceUrl="https://github.com/yourusername/blog-platform"
                liveUrl="https://blogplatform.com"
                image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
                customVariants={{
                  hidden: { opacity: 0, x: 120 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
                  hover: { scale: 1.04, boxShadow: '0px 8px 32px 0 rgba(0,255,117,0.18), 0 8px 32px 0 rgba(31,38,135,0.18)', borderColor: '#00ff75' },
                  tap: { scale: 0.97 },
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
                viewport={{ once: true, amount: 0.5 }}
                initial="hidden"
                whileInView="visible"
              />
            </motion.div>
          </motion.section>
        </AnimatePresence>
        {/* Mobile projects grid (only visible on mobile) */}
        {isMobile && (
          <>
            <div className="mobile-projects-grid-container">
              <h2 className="mobile-projects-title">Projects</h2>
              <div className="mobile-projects-grid">
                <div
                  className="mobile-project-card slide-in-left"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="glass-overlay"></div>
                  <div className="mobile-project-card-content">
                    <h2>Portfolio Website</h2>
                    <p>React, Styled-Components</p>
                  </div>
                </div>
                <div
                  className="mobile-project-card slide-in-right"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="glass-overlay"></div>
                  <div className="mobile-project-card-content">
                    <h2>Weather App</h2>
                    <p>Next.js, API</p>
                  </div>
                </div>
                <div
                  className="mobile-project-card slide-in-left"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="glass-overlay"></div>
                  <div className="mobile-project-card-content">
                    <h2>Task Manager</h2>
                    <p>React, GSAP</p>
                  </div>
                </div>
                <div
                  className="mobile-project-card slide-in-right"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="glass-overlay"></div>
                  <div className="mobile-project-card-content">
                    <h2>Blog Platform</h2>
                    <p>Next.js, Markdown</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile-contact-container">
              <MobileContactCard />
            </div>
          </>
        )}
        <AnimatePresence>
          <motion.section
            key="contact"
            initial={{ opacity: 0, y: 60, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.98 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <Contact id="contact" />
          </motion.section>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  );
}

export default App;

// High quality styled heading and section for Projects
const ProjectsSection = styled.section`
  width: 100%;
  position: relative;
  background: linear-gradient(180deg, #1e293b 0%, #2e3440 100%);
  color: var(--nord6);
  padding: 4rem 1rem 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 60vh;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 0;
    background: url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat;
    opacity: 0.18;
    filter: blur(2px) brightness(0.7);
    pointer-events: none;
  }
  > * {
    position: relative;
    z-index: 1;
  }
  @media (max-width: 900px) {
    padding: 2.5rem 0.5rem 1.2rem 0.5rem;
    min-height: 40vh;
  }
  @media (max-width: 600px) {
    padding: 1.2rem 0.2rem 0.7rem 0.2rem;
    min-height: 20vh;
  }
  @media (max-width: 400px) {
    padding: 0.5rem 0.1rem 0.3rem 0.1rem;
  }
`;

// Animated gradient keyframes for heading
const projectsGradientMove = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
`;

const StylishProjectsHeading = styled(motion.h2)`
  font-size: 2.9rem;
  font-weight: 900;
  margin-bottom: 2.7rem;
  letter-spacing: 2.5px;
  background: linear-gradient(90deg, #a78bfa 10%, #88c0d0 50%, #37FF8B 90%, #a78bfa 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-align: center;
  line-height: 1.1;
  animation: ${projectsGradientMove} 3.5s linear infinite alternate;
  position: relative;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    bottom: -8px;
    width: 0;
    height: 4px;
    background: linear-gradient(90deg, #a78bfa 10%, #88c0d0 50%, #37FF8B 90%, #a78bfa 100%);
    border-radius: 2px;
    transition: width 0.35s cubic-bezier(0.22,1,0.36,1), left 0.35s cubic-bezier(0.22,1,0.36,1);
  }
  &:hover::after, &:focus::after {
    width: 70%;
    left: 15%;
  }
  @media (max-width: 900px) {
    font-size: 2.1rem;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 400px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

// Mobile contact card component
const MobileContactCard = () => (
  <StyledWrapper>
    <div className="card">
      <h2 className="mobile-contact-title">Contact Me</h2>
      <div className="input-div">
        <input type="text" className="input" placeholder="Email" />
      </div>
      <div className="input-div">
        <input className="input" type="text" placeholder="Phone" />
      </div>
      <div className="input-div">
        <input className="input" type="text" placeholder="Message" />
      </div>
      <div className="button-div">
        <button className="submit">Submit</button>
      </div>
    </div>
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  .card {
    height: 20rem;
    background: transparent;
    border-top-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    border: 1.5px solid rgb(18, 153, 153);
    padding: 1rem;
    box-shadow: rgba(216, 213, 55, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    transition: 0.5s ease-in-out;
  }
  .mobile-contact-title {
    color: #fff;
    text-shadow: 0 2px 8px rgba(0, 255, 187, 0.18);
  }
  .card input, .card textarea {
    color: #fff;
  }
  .card input::placeholder, .card textarea::placeholder {
    color: #e0e0e0;
    opacity: 1;
  }
  .heading {
    text-align: center;
    font-weight: 600;
    padding-top: 1rem;
    font-size: large;
  }
  .input-div {
    display: flex;
    margin-top: 1rem;
    transition: 0.5s ease-in-out;
  }
  .card input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;
    width: 12rem;
    padding: 8px;
    outline: none;
  }
  .button-div {
    text-align: center;
  }
  .submit {
    margin-top: 3rem;
    text-align: center;
    padding: 8px 3rem;
    border: none;
    border-top-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    background-color: black;
    color: white;
    transition: 0.5s ease-in-out;
    cursor: pointer
  }
  .submit:hover {
    box-shadow: rgba(44, 43, 43, 0.664) 5px 5px, rgba(45, 45, 45, 0.3) 10px 10px, rgba(60, 59, 59, 0.2) 15px 15px, rgba(54, 53, 53, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
  }
  .card input::placeholder {
    color: black;
  }
  .input:focus {
    transition: 0.2s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
  .input:hover {
    transition: 0.2s ease-in-out;
    box-shadow: rgba(23, 131, 164, 0.81) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
`;
