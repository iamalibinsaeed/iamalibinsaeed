import React from 'react';
import styled from 'styled-components';

const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) {
    padding-bottom: 4vh;
  }

  p {
    margin: 0 0 30px 4px;
    color: ${({ theme }) => theme.colors.teal};
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: clamp(14px, 5vw, 16px);
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h2 {
    font-size: clamp(40px, 8vw, 80px);
    font-weight: 700;
    color: ${({ theme }) => theme.colors.lightestSlate};
    line-height: 1.1;
  }

  h3 {
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.slate};
    line-height: 0.9;
    font-size: clamp(40px, 8vw, 80px);
  }

  .hero-desc {
    margin: 20px 0 0;
    max-width: 540px;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.slate};

    a {
      color: ${({ theme }) => theme.colors.teal};
    }
  }

  .email-link {
    color: ${({ theme }) => theme.colors.teal};
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.teal};
    border-radius: 4px;
    padding: 1.25rem 1.75rem;
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.mono};
    line-height: 1;
    text-decoration: none;
    margin-top: 50px;
    transition: ${({ theme }) => theme.transition};

    &:hover,
    &:focus,
    &:active {
      background-color: ${({ theme }) => theme.colors.tealTint};
      outline: none;
    }
  }
`;

const Hero = () => {
    return (
        <StyledHeroSection>
            <p>Hi, my name is</p>
            <h2>Ali Bin Saeed.</h2>
            <h3>I build and test digital solutions.</h3>
            <div className="hero-desc">
                I am a <strong>Software Engineer in Test</strong> and <strong>Full Stack Developer</strong> specializing in building (and occasionally designing) exceptional digital experiences. Currently, I am focused on quality assurance at <a href="https://smarttechlodge.com/" target="_blank" rel="noreferrer">Smart Techlodge</a> while exploring Gen AI.
            </div>
            <a className="email-link" href="#projects">
                Check out my work!
            </a>
        </StyledHeroSection>
    );
};

export default Hero;
