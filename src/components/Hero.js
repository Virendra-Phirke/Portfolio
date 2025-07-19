import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import ContactButton from './ContactButton';

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const avatarVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  hover: { scale: 1.04, y: -8, transition: { type: 'spring', stiffness: 200 } },
};

const Hero = ({ fade = 1 }) => {
  return (
    <HeroContainer
      as={motion.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.7 }}
      variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], when: 'beforeChildren', staggerChildren: 0.18 } } }}
      style={{ opacity: fade, transition: 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)' }}
    >
      <motion.div variants={avatarVariants} whileHover="hover" style={{ marginBottom: '1.5rem', position: 'relative' }}>
        <AvatarGlow />
        <Avatar src={require('../img/Avatar.jpeg')} alt="Virendra" tabIndex={0} />
      </motion.div>
      <motion.div variants={textVariants}>
        <Heading>
          Hi, I'm <span>Virendra</span>
        </Heading>
      </motion.div>
      <motion.div variants={textVariants}>
        <AnimatedSubtitle>
          Frontend Developer & UI Enthusiast
        </AnimatedSubtitle>
      </motion.div>
      <motion.div variants={textVariants}>
        <Description>
          I craft beautiful, responsive, and accessible web experiences using modern technologies. Let's build something amazing together!
        </Description>
      </motion.div>
      <ButtonRow as={motion.div} variants={textVariants}>
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          <ContactButton
  label="Contact Me"
  animated
  onClick={() => {
    const section = document.getElementById('contact');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  }}
/>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        >
          <ContactButton
  label="View My Work"
  animated
  direction="right"
  onClick={() => {
    const section = document.getElementById('projects');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  }}
/>
        </motion.div>
      </ButtonRow>
    </HeroContainer>
  );
};

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeroContainer = styled.section`
  opacity: 0;
  transform: translateY(40px);
  animation: fadeInUp 1.1s cubic-bezier(0.22,1,0.36,1) 0.1s forwards;
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: none;
    }
  }
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem 2rem 1rem;
  box-sizing: border-box;
  background: transparent;
  text-align: center;
  @media (max-width: 900px) {
    padding: 2rem 0.5rem 1.5rem 0.5rem;
    min-height: 50vh;
  }
  @media (max-width: 600px) {
    padding: 1.2rem 0.2rem 1rem 0.2rem;
    min-height: 40vh;
    margin-top: 4.5rem;
  }
`;

const AvatarGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, #7c3aed55 0%, #37FF8B22 70%, transparent 100%);
  filter: blur(18px);
  transform: translate(-50%, -50%);
  z-index: 0;
  pointer-events: none;
  @media (max-width: 900px) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 600px) {
    width: 60px;
    height: 60px;
  }
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 32px 0 rgba(136,192,208,0.18);
  border: 3px solid #88c0d0;
  position: relative;
  z-index: 1;
  transition: box-shadow 0.3s, transform 0.3s;
  &:hover, &:focus {
    box-shadow: 0 8px 40px 0 #7c3aed55, 0 4px 32px 0 rgba(136,192,208,0.18);
    transform: scale(1.04);
    outline: 2px solid #37FF8B;
    outline-offset: 2px;
  }
  @media (max-width: 900px) {
    width: 80px;
    height: 80px;
  }
  @media (max-width: 600px) {
    width: 50px;
    height: 50px;
  }
`;

const Heading = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--nord6);
  margin-bottom: 1rem;
  letter-spacing: 1px;
  animation: ${fadeIn} 1s ease;
  span {
    color: var(--nord8);
    background: linear-gradient(90deg, #7c3aed 10%, #37FF8B 60%, #88c0d0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    filter: brightness(1.1) saturate(1.2);
  }
  @media (max-width: 900px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const AnimatedSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--nord8);
  margin-bottom: 1.2rem;
  letter-spacing: 0.5px;
  animation: ${fadeIn} 1.5s 0.2s both;
  @media (max-width: 900px) {
    font-size: 1.1rem;
  }
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: var(--nord4);
  max-width: 500px;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1.8s 0.4s both;
  @media (max-width: 900px) {
    font-size: 1rem;
    margin-bottom: 1.2rem;
  }
  @media (max-width: 600px) {
    font-size: 0.85rem;
    margin-bottom: 0.7rem;
    max-width: 90vw;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  button, a {
    outline: none;
    box-shadow: none;
    transition: box-shadow 0.2s;
  }
  button:focus, a:focus {
    box-shadow: 0 0 0 3px #37FF8B55;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.7rem;
    margin-top: 0.5rem;
  }
`;

export default Hero; 