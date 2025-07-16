import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const gradientFade = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
`;

const StyledWrapper = styled(motion.div)`
  width: 100%;
  background: linear-gradient(90deg, #232946 0%, #3b4252 50%, #232946 100%);
  background-size: 200% 200%;
  animation: ${gradientFade} 8s linear infinite alternate;
  border-top: 3px solid;
  border-image: linear-gradient(90deg, #37FF8B 0%, #a78bfa 50%, #88c0d0 100%) 1;
  box-shadow: 0 0 32px 0 rgba(59, 66, 82, 0.18);
  .parent {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 900px) {
      flex-direction: row;
      gap: 1.2rem;
      padding: 1.1rem 0;
    }
    @media (max-width: 600px) {
      flex-direction: column;
      gap: 0.5rem;
      padding: 0.7rem 0;
    }
  }
  .child {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    transition: all 0.5s cubic-bezier(0.22,1,0.36,1);
    border-radius: 50%;
    margin: 0 5px;
    position: relative;
    overflow: visible;
    @media (max-width: 600px) {
      width: 38px;
      height: 38px;
      margin: 0.2rem 0;
    }
  }
  .child:hover {
    box-shadow: 0px 0px 24px 6px #37FF8B88, 0px 10px 20px #5e81ac;
    z-index: 2;
  }
  .button {
    border: none;
    background-color: transparent;
    font-size: 20px;
    color: var(--nord6);
    border-radius: 50%;
    transition: box-shadow 0.3s, transform 0.3s, background 0.3s;
    position: relative;
    overflow: visible;
    @media (max-width: 600px) {
      font-size: 16px;
    }
  }
  .btn-1:hover svg {
    filter: drop-shadow(0 0 12px #37FF8B) drop-shadow(0 0 24px #37FF8B88);
    transform: scale(1.18) rotate(-10deg);
    transition: filter 0.3s, transform 0.3s;
  }
  .btn-2:hover svg {
    filter: drop-shadow(0 0 12px #ff00ff) drop-shadow(0 0 24px #ff00ff88);
    transform: scale(1.18) rotate(10deg);
    transition: filter 0.3s, transform 0.3s;
  }
  .btn-3:hover svg {
    filter: drop-shadow(0 0 12px #fff) drop-shadow(0 0 24px #a78bfa);
    transform: scale(1.18) rotate(-15deg);
    transition: filter 0.3s, transform 0.3s;
  }
  .btn-4:hover svg {
    filter: drop-shadow(0 0 12px #4267B2) drop-shadow(0 0 24px #4267B288);
    transform: scale(1.18) rotate(12deg);
    transition: filter 0.3s, transform 0.3s;
  }
`;

const Footer = () => {
  return (
    <StyledWrapper
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="parent">
        <motion.div className="child child-1" whileHover={{ scale: 1.18, rotate: -8 }} transition={{ type: 'spring', stiffness: 300 }}>
          <button className="button btn-1" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#1e90ff"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
          </button>
        </motion.div>
        <motion.div className="child child-2" whileHover={{ scale: 1.18, rotate: 8 }} transition={{ type: 'spring', stiffness: 300 }}>
          <a href="https://www.instagram.com/virendra_phirke?igsh=MzJwNXB6OWFsbjc5" target="_blank" rel="noopener noreferrer" className="button btn-2" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#ff00ff"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg></a>
        </motion.div>
        <motion.div className="child child-3" whileHover={{ scale: 1.18, rotate: -12 }} transition={{ type: 'spring', stiffness: 300 }}>
          <a href="https://github.com/Virendra-Phirke" target="_blank" rel="noopener noreferrer" className="button btn-3" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg></a>
        </motion.div>
        <motion.div className="child child-4" whileHover={{ scale: 1.18, rotate: 12 }} transition={{ type: 'spring', stiffness: 300 }}>
          <a href="https://www.facebook.com/share/1DqSMPnec7/" target="_blank" rel="noopener noreferrer" className="button btn-4" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" fill="#4267B2"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg></a>
        </motion.div>
      </div>
    </StyledWrapper>
  );
}

export default Footer; 