import React from 'react';
import styled from 'styled-components';

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.slate};
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 10px;

      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const Side = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${({ orientation }) => (orientation === 'left' ? '40px' : 'auto')};
  right: ${({ orientation }) => (orientation === 'left' ? 'auto' : '40px')};
  z-index: 10;
  color: ${({ theme }) => theme.colors.lightSlate};

  @media (max-width: 1080px) {
    display: none;
  }
`;

const Social = () => (
    <Side orientation="left">
        <StyledSocialList>
            <li><a href="https://github.com/iamalibinsaeed" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/in/iamalibinsaeed" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a href="https://twitter.com/iamalibinsaeed" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
        </StyledSocialList>
    </Side>
);

export default Social;
