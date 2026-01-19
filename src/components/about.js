import React from 'react';
import styled from 'styled-components';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: ${({ theme }) => theme.fonts.mono};
      font-size: 13px;

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.colors.teal};
        font-size: 14px;
        line-height: 12px;
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
    display: block;
    position: relative;
    width: 100%;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.teal};

    &:hover,
    &:focus {
      outline: 0;
      background: transparent;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: 4px;
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: ${({ theme }) => theme.transition};
      width: 100%;
      display: block;
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      transition: ${({ theme }) => theme.transition};
    }

    &:before {
      top: 0;
      left: 0;
      background-color: ${({ theme }) => theme.colors.navy};
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid ${({ theme }) => theme.colors.teal};
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
    const skills = ['JavaScript (ES6+)', 'PHP (Smarty / Laravel)', 'React.js', 'WordPress / CRM', 'Node.js', 'Automated Testing'];

    return (
        <StyledAboutSection id="about">
            <h2 className="section-title"><span>01.</span> About Me</h2>

            <div className="inner">
                <StyledText>
                    <div>
                        <p>I am a Software Engineer currently specializing in Software Testing, skilled in <strong>React.js, PHP, and WordPress</strong>. My experience ranges from building responsive web applications to customizing CRM systems like SugarCRM and SuiteCRM.</p>
                        <br />
                        <p>I am passionate about ensuring product quality, optimizing performance, and solving technical challenges through a blend of development and testing expertise.</p>
                        <br />
                        <p>Here are a few technologies I’ve been working with recently:</p>
                    </div>

                    <ul className="skills-list">
                        {skills.map((skill, i) => (
                            <li key={i}>{skill}</li>
                        ))}
                    </ul>
                </StyledText>

                <StyledPic>
                    <div className="wrapper">
                        <img className="img" src="https://via.placeholder.com/300x300/0a192f/64ffda?text=Ali+Bin+Saeed" alt="Headshot" />
                    </div>
                </StyledPic>
            </div>
        </StyledAboutSection>
    );
};

export default About;
