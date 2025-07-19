import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import ContactInfo from './ContactInfo';
import { motion } from 'framer-motion';

const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
};
const infoVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const formVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const fieldVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};
const buttonVariants = {
  rest: { scale: 1, backgroundColor: '#ff7a01', color: '#001925' },
  hover: { scale: 1.08, backgroundColor: '#fff', color: '#ff7a01', transition: { duration: 0.2 } },
};

const ContactGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  background: rgba(24, 24, 27, 0.38);
  border-radius: 22px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
  padding: 2.5rem 2rem;
  backdrop-filter: blur(18px) saturate(160%);
  -webkit-backdrop-filter: blur(18px) saturate(160%);
  border: 1.5px solid rgba(255,255,255,0.10);
  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 3.5rem;
    padding: 3.5rem 3rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 0.6rem 0.2rem;
    gap: 0.6rem;
    border-radius: 9px;
    max-width: 98vw;
    min-width: 0;
    .contact-info-col {
      order: 1;
      width: 92vw;
      max-width: 340px;
      margin: 0 auto 0.5rem auto;
    }
    .contact-form-col {
      order: 2;
      width: 98vw;
      max-width: 500px;
      margin: 0 auto;
    }
  }
`;

// Animated gradient keyframes
const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
`;

const StylishHeading = styled(motion.h2)`
  font-size: 2.4rem;
  font-weight: 900;
  margin-bottom: 2.2rem;
  letter-spacing: 2px;
  background: linear-gradient(90deg, #a78bfa 10%, #88c0d0 50%, #37FF8B 90%, #a78bfa 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-align: center;
  line-height: 1.1;
  filter: drop-shadow(0 0 16px #a78bfa55) drop-shadow(0 2px 16px #88c0d055);
  animation: ${gradientMove} 3.5s linear infinite alternate;
`;

const Contact = ({ id }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = 'Invalid email address.';
    if (!form.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }
    setSubmitted(true);
    setErrors({});
    // Here you would send the form data to your backend or email service
  };

  const handleReset = () => {
    setForm({ name: '', email: '', message: '' });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <StyledWrapper>
      <motion.section
        id={id}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ transition: 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        <motion.div variants={headingVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="contact-info-section">
            <StylishHeading
              initial={{ opacity: 0, y: -30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >Contact Info</StylishHeading>
          </div>
        </motion.div>
        <motion.div
          as={ContactGrid}
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          style={{ display: 'flex', flexDirection: 'row', gap: '2.5rem', width: '100%', maxWidth: '900px', margin: '0 auto' }}
        >
          <motion.div className="contact-info-col" variants={infoVariants}>
            <ContactInfo />
          </motion.div>
          <div className="contact-form-section">
            <motion.div className="contact-form-col" variants={formVariants} style={{ flex: 1, minWidth: 0 }}>
              <div className="form-container">
                <motion.div className="form" initial="hidden" animate="visible" variants={gridVariants}>
                  <motion.span className="heading" variants={fieldVariants} custom={0}>Get in touch</motion.span>
                  <motion.input placeholder="Name" type="text" className="input" name="name" value={form.name} onChange={handleChange} variants={fieldVariants} custom={1} />
                  {errors.name && <div style={{ color: '#ff7a01', fontSize: '0.95em', marginBottom: 8 }}>{errors.name}</div>}
                  <motion.input placeholder="Email" id="mail" type="email" className="input" name="email" value={form.email} onChange={handleChange} variants={fieldVariants} custom={2} />
                  {errors.email && <div style={{ color: '#ff7a01', fontSize: '0.95em', marginBottom: 8 }}>{errors.email}</div>}
                  <motion.textarea placeholder="Say Hello" rows={10} cols={30} id="message" name="message" className="textarea" value={form.message} onChange={handleChange} variants={fieldVariants} custom={3} />
                  {errors.message && <div style={{ color: '#ff7a01', fontSize: '0.95em', marginBottom: 8 }}>{errors.message}</div>}
                  <motion.div className="button-container" style={{ display: 'flex', gap: 10 }}>
                    <motion.button
                      type="submit"
                      className="send-button"
                      variants={buttonVariants}
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      onClick={handleSubmit}
                    >Send</motion.button>
                    <motion.div className="reset-button-container" variants={fieldVariants} custom={5}>
                      <motion.button
                        type="button"
                        id="reset-btn"
                        className="reset-button"
                        variants={buttonVariants}
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        onClick={handleReset}
                      >Reset</motion.button>
                    </motion.div>
                  </motion.div>
                  {submitted && <div style={{ color: '#a3be8c', fontWeight: 600, marginTop: 10 }}>Thank you! Your message has been sent.</div>}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 70vh;
  padding: 3.5rem 0 3rem 0;
  background: none;
  .orange {
    color: #ff7a01;
  }
  .form-container {
    max-width: 700px;
    margin: 30px;
    background: rgba(0, 25, 37, 0.45);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
    backdrop-filter: blur(18px) saturate(160%);
    -webkit-backdrop-filter: blur(18px) saturate(160%);
    border-left: 5px solid #ff7a01;
    border-radius: 18px;
    border: 1.5px solid rgba(255,255,255,0.10);
    padding: 30px;
    border-left: 5px solid #ff7a01;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%);
    @media (max-width: 600px) {
      max-width: 99vw;
      margin: 8px 0 0 0;
      padding: 7px 2vw;
      border-radius: 10px;
      border-left: 2px solid #ff7a01;
      clip-path: none;
    }
  }
  @media (max-width: 600px) {
    min-height: 46vh;
    padding: 1.2rem 0 1.2rem 0;
  }

  .heading {
    display: block;
    color: white;
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 20px;
    @media (max-width: 600px) {
      font-size: 1rem;
      margin-bottom: 7px;
    }
  }
  .form-container .form .input,
  .form-container .form .textarea {
    font-size: 1rem;
    @media (max-width: 600px) {
      font-size: 0.72rem;
      padding: 5px;
    }
  }
  .form-container .form .button-container {
    display: flex;
    gap: 10px;
    @media (max-width: 600px) {
      flex-direction: column;
      gap: 4px;
    }
  }

  .form-container .form .input {
    color: #87a4b6;
    width: 100%;
    background-color: #002733;
    border: none;
    outline: none;
    padding: 10px;
    margin-bottom: 20px;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    border-left: 1px solid transparent;
  }

  .form-container .form .input:focus {
    border-left: 5px solid #ff7a01;
  }

  .form-container .form .textarea {
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
    background-color: #013747;
    color: #ff7a01;
    font-weight: bold;
    resize: none;
    max-height: 150px;
    margin-bottom: 20px;
    border-left: 1px solid transparent;
    transition: all 0.2s ease-in-out;
  }

  .form-container .form .textarea:focus {
    border-left: 5px solid #ff7a01;
  }

  .form-container .form .button-container {
    display: flex;
    gap: 10px;
  }

  .form-container .form .button-container .send-button {
    flex-basis: 70%;
    background: #ff7a01;
    padding: 10px;
    color: #001925;
    text-align: center;
    font-weight: bold;
    border: 1px solid transparent;
    transition: all 0.2s ease-in-out;
  }

  .form-container .form .button-container .send-button:hover {
    background: transparent;
    border: 1px solid #ff7a01;
    color: #ff7a01;
  }

  .form-container .form .button-container .reset-button-container {
    filter: drop-shadow(1px 1px 0px #ff7a01);
    flex-basis: 30%;
  }

  .form-container .form .button-container .reset-button-container .reset-button {
    position: relative;
    text-align: center;
    padding: 10px;
    color: #ff7a01;
    font-weight: bold;
    background: #001925;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%);
    transition: all 0.2s ease-in-out;
  }

  .form-container .form .button-container .reset-button-container .reset-button:hover {
    background: #ff7a01;
    color: #001925;
  }`;

export default Contact; 