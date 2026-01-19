import React from 'react';
import styled from 'styled-components';

const StyledCertSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, 32px);
  }

  .cert-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;
    width: 100%;
  }
`;

const StyledCertCard = styled.div`
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 100%;
  padding: 2rem 1.75rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.lightNavy};
  transition: ${({ theme }) => theme.transition};

  &:hover,
  &:focus {
    transform: translateY(-5px);
  }

  header {
    width: 100%;
    margin-bottom: 30px;
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: static;
    padding: 0;
    height: auto;
  }

  .folder {
    color: ${({ theme }) => theme.colors.teal};
    i {
      font-size: 40px;
    }
  }

  h3 {
    margin: 0 0 10px;
    color: ${({ theme }) => theme.colors.lightestSlate};
    font-size: 18px;
  }
`;

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.teal};
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 16px;
    font-weight: 400;

    &:before {
      content: '04. ';
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
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

const Certifications = () => {
    const certs = [
        'Generative AI Overview for Project Managers',
        'Foundations of Project Management',
        'Technical Training Course',
        'Introduction to Cloud Identity',
        'Nestlé E-Learning Sustainability',
    ];

    return (
        <StyledCertSection>
            <h2>Certifications</h2>
            <div className="cert-grid">
                {certs.map((cert, i) => (
                    <StyledCertCard key={i}>
                        <header>
                            <div className="folder">
                                <i className="fas fa-certificate"></i>
                            </div>
                        </header>
                        <h3>{cert}</h3>
                    </StyledCertCard>
                ))}
            </div>
        </StyledCertSection>
    );
};

const Contact = () => {
    return (
        <StyledContactSection id="contact">
            <span className="overline">What’s Next?</span>
            <h2 className="title">Get In Touch</h2>
            <p>
                I’m currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open!
            </p>
            <a className="email-link" href="mailto:iamalibinsaeed@gmail.com" target="_blank" rel="noreferrer">
                Say Hello
            </a>
        </StyledContactSection>
    );
};

export { Certifications, Contact };
