import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: 100px;
  background-color: rgba(10, 25, 47, 0.85);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: ${({ theme }) => theme.transition};

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  color: ${({ theme }) => theme.colors.lightestSlate};
  font-family: ${({ theme }) => theme.fonts.mono};
  counter-reset: item 0;
  z-index: 12;

  .logo {
    color: ${({ theme }) => theme.colors.teal};
    font-size: 32px;
    font-weight: 700;
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: 13px;

      a {
        padding: 10px;

        &:before {
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: ${({ theme }) => theme.colors.teal};
          font-size: 12px;
          text-align: right;
        }
      }
    }
  }

  .resume-button {
    color: ${({ theme }) => theme.colors.teal};
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.teal};
    border-radius: 4px;
    padding: 0.75rem 1rem;
    font-family: ${({ theme }) => theme.fonts.mono};
    line-height: 1;
    text-decoration: none;
    margin-left: 15px;
    font-size: 13px;

    &:hover,
    &:focus,
    &:active {
      background-color: ${({ theme }) => theme.colors.tealTint};
      outline: none;
    }
  }
`;

const Nav = () => {
    return (
        <StyledHeader>
            <StyledNav>
                <div className="logo">A</div>
                <StyledLinks>
                    <ol>
                        <li><a href="#about">About</a></li>
                        <li><a href="#jobs">Experience</a></li>
                        <li><a href="#projects">Work</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ol>
                    <div>
                        <a className="resume-button" href="/Profile (1).pdf" target="_blank" rel="noopener noreferrer">
                            Resume
                        </a>
                    </div>
                </StyledLinks>
            </StyledNav>
        </StyledHeader>
    );
};

export default Nav;
