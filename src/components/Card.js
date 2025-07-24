import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from './Button';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  hover: { scale: 1.04, boxShadow: '0px 8px 32px 0 rgba(0,255,117,0.18), 0 8px 32px 0 rgba(31,38,135,0.18)', borderColor: '#00ff75' },
  tap: { scale: 0.97 },
};

const Card = ({
  title = 'Popular this month',
  subtitle = 'Powered By',
  sourceUrl = '#',
  liveUrl = '#',
  image = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  initial = 'hidden',
  whileInView = 'visible',
  transition,
  customVariants,
  viewport = { once: true, amount: 0.3 },
}) => {
  return (
    <StyledWrapper>
      <motion.div
        className="card"
        variants={customVariants || cardVariants}
        initial={initial}
        whileInView={whileInView}
        whileHover="hover"
        whileTap="tap"
        transition={transition}
        viewport={viewport}
      >
        <div className="card-img-wrapper">
          <img src={image} alt={`Screenshot of ${title} project`} className="card-img" loading="lazy" />
        </div>
        <div className="card-gradient-content">
          <div className="card-content">
            <p className="heading">{title}</p>
            <p className="subtitle">{subtitle}</p>
          </div>
          <div className="card-actions">
            <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="ui-btn source-btn">
              <span>Source Code</span>
            </a>
            <div style={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" style={{minWidth: 0, maxWidth: '90px'}}>
                <Button label="View Project" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    will-change: transform, box-shadow, border-color;
  }

  .card:hover, .card:focus {
    box-shadow: 0 14px 48px 0 #a78bfa44, 0 4px 24px 0 #00ff7540;
    border-color: #a78bfa;
    transform: scale(1.045);
    transition: box-shadow 0.5s cubic-bezier(0.22,1,0.36,1), border 0.5s cubic-bezier(0.22,1,0.36,1), transform 0.5s cubic-bezier(0.22,1,0.36,1);
  }
    width: 260px;
    min-height: 370px;
    background: rgba(24,24,27,0.18);
    display: flex;
    flex-direction: column;
    align-items: stretch;
    border-radius: 18px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.10);
    overflow: hidden;
    padding: 0;
    cursor: pointer;
    backdrop-filter: blur(28px) saturate(180%);
    -webkit-backdrop-filter: blur(28px) saturate(180%);
    z-index: 1;
    transition: box-shadow 0.04s, border 0.04s, transform 0.04s, scale 0.04s cubic-bezier(0.22,1,0.36,1);
    will-change: transform, box-shadow;
    border: 1.5px solid rgba(255,255,255,0.13);
    /* No neon effect by default, keep original background */
  }
  .card > .card-gradient-content {
    background: rgba(24,24,27,0.18);
    border-radius: 16px;
    margin: 2px;
    /* Ensures the inner content sits above the border gradient */
    position: relative;
    z-index: 2;
  }
  .card:hover {
    box-shadow: 0px 0px 30px 2px rgba(0, 255, 117, 0.25), 0 8px 32px 0 rgba(31, 38, 135, 0.10);
    border: 1.5px solid #00ff75;
    transform: scale(1.03);
  }
 
  
  .card::after {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, rgba(24,24,27,0.13) 0%, rgba(24,24,27,0.22) 100% );
    transform: translate3d(0, 0, 0) scale(0.97);
    filter: blur(28px);
  }
  .card-img-wrapper {
    width: 100%;
    height: 140px;
    overflow: hidden;
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    background: rgba(24,24,27,0.10);
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1.5px solid rgba(24,24,27,0.13);
  }
  .card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .card-gradient-content {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: rgba(24,24,27,0.18);
    padding: 22px 18px 18px 18px;
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
    min-height: 180px;
  }
  .card-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    margin-bottom: 18px;
  }
  .heading {
    font-size: 1.18rem;
    text-transform: capitalize;
    font-weight: 700;
    color: #fff;
    margin-bottom: 2px;
    letter-spacing: 0.01em;
  }
  .subtitle {
    font-size: 0.98rem;
    color: #e0e0e0;
    font-weight: 500;
    margin-bottom: 2px;
  }
  .card-actions {
    display: flex;
    gap: 0.7rem;
    margin-top: 0;
    justify-content: space-between;
    align-items: center;
  }
  .ui-btn.source-btn {
    --btn-default-bg: #010314;
    --btn-padding: 8px 15px;
    --btn-hover-bg: rgb(51, 51, 51);
    --btn-transition: .3s;
    --btn-letter-spacing: .1rem;
    --btn-animation-duration: 1.2s;
    --btn-shadow-color: rgba(0, 0, 0, 0.137);
    --btn-shadow: 0 2px 10px 0 var(--btn-shadow-color);
    --hover-btn-color: #7241FF;
    --default-btn-color: #fff;
    --font-size: 12px;
    --font-weight: 600;
    --font-family: Menlo,Roboto Mono,monospace;
    box-sizing: border-box;
    padding: var(--btn-padding);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--default-btn-color);
    font: var(--font-weight) var(--font-size) var(--font-family);
    background: var(--btn-default-bg);
    cursor: pointer;
    transition: var(--btn-transition);
    overflow: hidden;
    box-shadow: var(--btn-shadow);
    border-radius: 6px;
    border: 2px solid #2A2B3A;
    min-width: 0;
    max-width: 100px;
    text-decoration: none;
  }
  .ui-btn.source-btn span {
    letter-spacing: var(--btn-letter-spacing);
    transition: var(--btn-transition);
    box-sizing: border-box;
    position: relative;
    background: inherit;
  }
  .ui-btn.source-btn span::before {
    box-sizing: border-box;
    position: absolute;
    content: "";
    background: inherit;
  }
  .ui-btn.source-btn:hover, .ui-btn.source-btn:focus {
    background: var(--btn-default-bg);
    box-shadow: 0px 0px 10px 0px rgba(119, 68, 255, 0.70);
    border: 2px solid #7241FF;
  }
  .ui-btn.source-btn:hover span, .ui-btn.source-btn:focus span {
    color: var(--hover-btn-color);
  }
  .ui-btn.source-btn:hover span::before, .ui-btn.source-btn:focus span::before {
    animation: chitchat linear both var(--btn-animation-duration);
  }
  @keyframes chitchat {
    0% { content: "#"; }
    5% { content: "."; }
    10% { content: "^{"; }
    15% { content: "-!"; }
    20% { content: "#$_"; }
    25% { content: "№:0"; }
    30% { content: "#{+."; }
    35% { content: "@}-?"; }
    40% { content: "?{4@%"; }
    45% { content: "=.,^!"; }
    50% { content: "?2@%"; }
    55% { content: "\\;1}]"; }
    60% { content: "?{%:%"; right: 0; }
    65% { content: "|{f[4"; right: 0; }
    70% { content: "{4%0%"; right: 0; }
    75% { content: "'1_0<"; right: 0; }
    80% { content: "{0%"; right: 0; }
    85% { content: "]>'"; right: 0; }
    90% { content: "4"; right: 0; }
    95% { content: "2"; right: 0; }
    100% { content: ""; right: 0; }
  }
  .card-btn {
    flex: 1;
    text-align: center;
    padding: 10px 0;
    border-radius: 8px;
    background: rgba(24,24,27,0.32);
    color: #fff;
    font-weight: 600;
    font-size: 0.97rem;
    text-decoration: none;
    border: 1.5px solid rgba(255,255,255,0.13);
    transition: background 0.2s, color 0.2s, border 0.2s, box-shadow 0.2s;
    box-shadow: 0 2px 12px 0 rgba(24,24,27,0.13);
    backdrop-filter: blur(10px) saturate(180%);
    -webkit-backdrop-filter: blur(10px) saturate(180%);
    cursor: pointer;
    outline: none;
    min-width: 0;
  }
  .card-btn.primary {
    background: rgba(24,24,27,0.48);
    color: #fff;
    border: 1.5px solid rgba(255,255,255,0.18);
    box-shadow: 0 2px 16px 0 rgba(24,24,27,0.13);
  }
  .card-btn:hover, .card-btn.primary:hover {
    background: rgba(24,24,27,0.62);
    color: #fff;
    border: 1.5px solid #fff;
    box-shadow: 0 4px 16px 0 rgba(24,24,27,0.18);
  }
  @media (max-width: 900px) {
    .card {
      width: 94vw;
      min-width: 0;
      max-width: 98vw;
      min-height: 220px;
    }
    .card-img-wrapper {
      height: 80px;
    }
    .card-gradient-content {
      padding: 10px 8px 8px 8px;
      min-height: 60px;
    }
    .heading {
      font-size: 0.96rem;
    }
    .subtitle {
      font-size: 0.87rem;
    }
  }
  @media (max-width: 600px) {
    .card {
      width: 86vw;
      max-width: 290px;
      min-width: 0;
      margin: 0.4rem auto;
      padding: 0;
      min-height: 98px;
      box-sizing: border-box;
    }
    .card-img-wrapper {
      height: 34px;
    }
    .card-gradient-content {
      padding: 4px 4px 4px 4px;
      min-height: 18px;
    }
    .card-actions {
      flex-direction: column;
      gap: 0.2rem;
      align-items: stretch;
    }
    .heading {
      font-size: 0.72rem;
    }
    .subtitle {
      font-size: 0.68rem;
    }
  }
`;

export default Card; 