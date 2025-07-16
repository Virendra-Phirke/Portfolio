import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ResumeButton from './ResumeButton';

const techStack = [
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "JavaScript",
  "GSAP",
  "Framer Motion",
];

const funFacts = [
  "I design in Figma before I code",
  "Dark mode > Light mode 😎",
  "I learn best by building real-world projects",
  "Currently exploring WebGL & 3D UI",
];

const containerVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const badgeVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const AboutMe = ({ visible = true }, ref) => {
  return (
    <Section
      as={motion.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
      id="about"
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
      }}
    >
      <ContentGrid as={motion.div} variants={containerVariants}>
        {/* Left Side - Avatar or Image */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.7 }}
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <AvatarWrapper
            as={motion.div}
            whileHover={{ rotate: -10, scale: 1.04 }}
            whileFocus={{ rotate: -10, scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 300 }}
            tabIndex={0}
          >
            <Avatar src={require('../img/Avatar.jpeg')} alt="Virendra" />
          </AvatarWrapper>
        </motion.div>
        {/* Right Side - Content */}
        <RightContent as={motion.div} variants={itemVariants} initial={{ opacity: 0, x: 120 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true, amount: 0.7 }}>
          <motion.h2
            variants={itemVariants}
            style={{ fontWeight: 700 }}
          >
            👋 Hey, I'm <span>Virendra</span>
          </motion.h2>
          <motion.p
            className="about-intro"
            variants={itemVariants}
          >
            I'm a frontend developer who crafts sleek, responsive web apps with a focus on clean code and delightful UI. I bring creativity and interactivity together using React, animations, and pixel-perfect design.
          </motion.p>

          <motion.h3
            className="about-subtitle"
            variants={itemVariants}
          >
            ⚡ Tech I Love:
          </motion.h3>
          <TechStackRow as={motion.div} variants={containerVariants}>
            {techStack.map((tech, idx) => (
              <TechBadge
                as={motion.span}
                key={tech}
                variants={badgeVariants}
                whileHover={{ scale: 1.12 }}
              >
                {tech}
              </TechBadge>
            ))}
          </TechStackRow>

          <motion.h3
            className="about-subtitle"
            variants={itemVariants}
          >
            💡 Fun Facts:
          </motion.h3>
          <FunFactsList as={motion.ul} variants={containerVariants}>
            {funFacts.map((fact, idx) => (
              <FunFactItem
                as={motion.li}
                key={fact}
                variants={badgeVariants}
                whileHover={{ scale: 1.05, color: "#a3be8c" }}
              >
                {fact}
              </FunFactItem>
            ))}
          </FunFactsList>

          <motion.div
            className="about-actions"
            variants={itemVariants}
            style={{ marginTop: "2rem", display: "flex", alignItems: "center", gap: "0.8em" }}
          >
            <ResumeButton />
            <TalkLink
              as={motion.a}
              href="#contact"
              whileHover={{ color: "#ebcb8b" }}
            >
              Let's Talk →
            </TalkLink>
          </motion.div>
        </RightContent>
      </ContentGrid>
    </Section>
  );
};

export default React.forwardRef(AboutMe);

const Section = styled(motion.section)`
  width: 100%;
  min-height: 80vh;
  background: linear-gradient(180deg, #2e3440 0%, #1e293b 100%);
  color: var(--nord6);
  padding: 4rem 1rem 2rem 1rem;
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    padding: 3rem 0.5rem 1.5rem 0.5rem;
    min-height: 70vh;
  }
  @media (max-width: 600px) {
    padding: 2rem 0.2rem 1rem 0.2rem;
    min-height: 60vh;
  }
`;

const ContentGrid = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: center;
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1.2fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.1rem;
    padding: 0.2rem 0;
  }
`;

const AvatarWrapper = styled.div`
  width: 220px;
  height: 220px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  overflow: hidden;
  .avatar-img {
    z-index: 2;
  }
  &::before {
    content: '';
    position: absolute;
    width: 100px;
    height: 130%;
    background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
    animation: rotBGimg 3s linear infinite;
    transition: all 0.2s linear;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
  }
  &::after {
    content: '';
    position: absolute;
    background: #07182E;
    inset: 5px;
    border-radius: 15px;
    z-index: 1;
  }
  @keyframes rotBGimg {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
  }
  @media (max-width: 900px) {
    width: 160px;
    height: 160px;
  }
  @media (max-width: 600px) {
    width: 74px;
    height: 74px;
    margin-bottom: 0.7rem;
  }
`;

const Avatar = styled.img`
  width: 210px;
  height: 210px;
  border-radius: 15px;
  object-fit: cover;
  position: relative;
  z-index: 2;
  @media (max-width: 900px) {
    width: 140px;
    height: 140px;
    border-radius: 12px;
  }
  @media (max-width: 600px) {
    width: 60px;
    height: 60px;
    border-radius: 9px;
  }
`;

const RightContent = styled(motion.div)`
  h2 {
    font-size: 2.3rem;
    font-weight: 700;
    margin-bottom: 0.7rem;
    span {
      color: var(--nord8);
      background: linear-gradient(90deg, #7c3aed 30%, #37FF8B 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
  .about-intro {
    font-size: 1.15rem;
    color: var(--nord4);
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }
  .about-subtitle {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    margin-top: 1.2rem;
    color: var(--nord8);
  }
  @media (max-width: 900px) {
    h2 { font-size: 1.6rem; }
    .about-intro { font-size: 1rem; }
    .about-subtitle { font-size: 1.05rem; }
  }
  @media (max-width: 600px) {
    h2 { font-size: 1rem; margin-bottom: 0.3rem; }
    .about-intro { font-size: 0.82rem; margin-bottom: 0.7rem; }
    .about-subtitle { font-size: 0.82rem; margin-bottom: 0.2rem; margin-top: 0.7rem; }
    .about-actions {
      flex-direction: column;
      gap: 0.4em;
      margin-top: 1.2rem !important;
      align-items: stretch;
    }
  }
`;

const TechStackRow = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-bottom: 1.5rem;
  @media (max-width: 600px) {
    gap: 0.4rem;
    margin-bottom: 1rem;
  }
`;

const TechBadge = styled(motion.span)`
  background: rgba(236, 239, 244, 0.18);
  color: transparent;
  background-image: linear-gradient(90deg, #88c0d0 0%, #eceff4 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  padding: 0.4em 1.1em;
  border-radius: 999px;
  font-size: 0.98rem;
  font-weight: 500;
  box-shadow: 0 2px 8px 0 rgba(136,192,208,0.08);
  cursor: pointer;
  transition: background 0.2s, color 0.2s, transform 0.2s;
  backdrop-filter: blur(8px) saturate(180%);
  -webkit-backdrop-filter: blur(8px) saturate(180%);
  border: 1px solid rgba(236, 239, 244, 0.25);
  @media (max-width: 900px) {
    font-size: 0.92rem;
    padding: 0.3em 0.8em;
  }
  @media (max-width: 600px) {
    font-size: 0.7rem;
    padding: 0.14em 0.4em;
  }
`;

const FunFactsList = styled(motion.ul)`
  list-style: disc inside;
  color: var(--nord4);
  margin-bottom: 1.5rem;
  padding-left: 1.2rem;
  @media (max-width: 600px) {
    margin-bottom: 1rem;
    padding-left: 0.5rem;
  }
`;

const FunFactItem = styled(motion.li)`
  font-size: 1.05rem;
  margin-bottom: 0.4rem;
  transition: color 0.2s, transform 0.2s;
  cursor: pointer;
  @media (max-width: 900px) {
    font-size: 0.95rem;
  }
  @media (max-width: 600px) {
    font-size: 0.85rem;
  }
`;

const TalkLink = styled(motion.a)`
  color: #ebcb8b;
  font-weight: 500;
  font-size: 1.08rem;
  text-decoration: underline;
  transition: color 0.2s;
  cursor: pointer;
  @media (max-width: 900px) {
    font-size: 0.98rem;
  }
  @media (max-width: 600px) {
    font-size: 0.85rem;
  }
`;