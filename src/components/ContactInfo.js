import React from 'react';
import styled, { keyframes } from 'styled-components';

const ContactInfo = () => {
  return (
    <InfoWrapper>
      <InfoItem>
        <IconCircle>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="none" />
            <path d="M4 4H20V20H4V4Z" fill="none" />
            <path d="M4 4L12 13L20 4" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 4H20V20H4V4Z" stroke="#a78bfa" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
        </IconCircle>
        <div>
          <Label>Email</Label>
          <Value>virendraphirke2222@gmail.com</Value>
        </div>
      </InfoItem>
      <InfoItem>
        <IconCircle>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="none" />
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C7.61 21 3 16.39 3 11a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </IconCircle>
        <div>
          <Label>Phone</Label>
          <Value>+91 9373099032</Value>
        </div>
      </InfoItem>
      <InfoItem>
        <IconCircle>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="none" />
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </IconCircle>
        <div>
          <Label>Location</Label>
          <Value>Akola, Maharashtra, India</Value>
        </div>
      </InfoItem>
    </InfoWrapper>
  );
};

const pulseGlow = keyframes`
  from { box-shadow: 0 0 24px 6px #a78bfa88, 0 2px 12px 0 rgba(167,139,250,0.22); }
  to { box-shadow: 0 0 36px 12px #a78bfaee, 0 2px 12px 0 rgba(167,139,250,0.32); }
`;

const InfoWrapper = styled.div`
  opacity: 0;
  transform: translateY(40px);
  animation: fadeInUp 1.1s cubic-bezier(0.22,1,0.36,1) 0.1s forwards;
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: none;
    }
  }
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  margin: 2.5rem 0 2.5rem 0;
  background: rgba(136, 192, 208, 0.10); /* Soft nord blue glass */
  border-radius: 22px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
  border: 1.5px solid rgba(255,255,255,0.13);
  backdrop-filter: blur(18px) saturate(160%);
  -webkit-backdrop-filter: blur(18px) saturate(160%);
  padding: 2.2rem 2rem;
  @media (max-width: 600px) {
    gap: 1.1rem;
    border-radius: 12px;
    padding: 1rem 0.5rem;
    margin: 1.2rem 0 1.2rem 0;
  }
`;

const IconCircle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(167, 139, 250, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px 0 rgba(167, 139, 250, 0.12);
  transition: box-shadow 0.4s, background 0.4s;
  svg {
    transition: transform 0.4s, filter 0.4s;
  }
  @media (max-width: 600px) {
    width: 34px;
    height: 34px;
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

const Label = styled.div`
  font-size: 1.15rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.2rem;
  @media (max-width: 600px) {
    font-size: 0.89rem;
    margin-bottom: 0.08rem;
  }
`;

const Value = styled.div`
  font-size: 1.05rem;
  color: #e5e9f0;
  @media (max-width: 600px) {
    font-size: 0.88rem;
    word-break: break-word;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  position: relative;
  border-radius: 18px;
  transition: box-shadow 0.35s cubic-bezier(0.22,1,0.36,1), background 0.35s, transform 0.25s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 0 4px #a78bfa55, 0 8px 32px 0 rgba(136,192,208,0.18);
    background: rgba(136,192,208,0.13);
    backdrop-filter: blur(24px) saturate(180%);
    transform: scale(1.035) translateY(-2px);
    z-index: 2;
  }
  &:hover ${IconCircle} {
    filter: brightness(1.15) drop-shadow(0 0 8px #a78bfa);
    background: rgba(167,139,250,0.16);
    box-shadow: 0 0 24px 6px #a78bfa88, 0 2px 12px 0 rgba(167,139,250,0.22);
    background: rgba(167,139,250,0.18);
    animation: ${pulseGlow} 1.2s infinite alternate;
  }
  &:hover svg {
    transform: rotate(-12deg) scale(1.13);
    filter: drop-shadow(0 0 8px #a78bfa88);
    transition: transform 0.4s, filter 0.4s;
  }
  &:hover ${Label} {
    color: #a78bfa;
    letter-spacing: 1.5px;
    transform: translateX(2px) scale(1.04);
    transition: color 0.3s, letter-spacing 0.3s, transform 0.3s;
  }
  &:hover ${Value} {
    color: #fff;
    transform: translateX(2px) scale(1.03);
    transition: color 0.3s, transform 0.3s;
  }
`;

export default ContactInfo; 